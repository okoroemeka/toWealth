import { Avatar, Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: "15px",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "normal",
    fontSize: "0.7rem",
    margin: "0.2rem 0",
  },
  value: {
    margin: "0.2rem 0rem",
  },
  secondary: {
    marginTop: "1rem",
    fontWeight: "normal",
    fontSize: "0.8rem",
  },
}));

export default function WorthCardUI({
  title,
  value,
  secondaryData,
  color,
  icon,
  iconColor,
}) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      style={{
        backgroundColor: color ? color : "#fff",
        color: color ? "#fff" : "#000",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.value} component="h2" variant="h5">
              {value}
            </Typography>
            {secondaryData ? (
              <Typography className={classes.secondary}>
                {secondaryData}
              </Typography>
            ) : null}
          </Box>
          <Avatar
            style={{ backgroundColor: iconColor ? iconColor : pink[500] }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
}
