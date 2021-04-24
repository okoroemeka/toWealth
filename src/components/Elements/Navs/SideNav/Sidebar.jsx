import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import userAvatar from "../../../../assets/images/userAvatar.svg";
import {
  AssessmentOutlined,
  CheckBoxOutlined,
  ContactSupport,
  DashboardOutlined,
  Description,
  ImportExportOutlined,
  MonetizationOnOutlined,
  SaveAltOutlined,
  Star,
  StarBorder,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import { navigate } from "@reach/router";
import "./SideNav.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    // [theme.breakpoints.up("sm")]: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
    width: drawerWidth,
    flexShrink: 0,
  },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
  userDetails: {
    textAlign: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  userImageWrapper: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto",
  },
  userImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  userName: {
    fontWeight: "normal",
    marginTop: "1rem",
    marginBottom: "0.2rem",
  },
  position: {
    color: "#9ea0a5",
    fontWeight: "normal",
    margin: "0.2rem 0",
  },
  green: {
    color: green[500],
  },
  copy: {
    padding: "0 16px",
    lineHeight: "5px",
  },
  listItem: {
    cursor: "pointer",
  },
}));

export default function Sidebar({
  handleDrawerToggle,
  mobileOpen,
  window,
  fullname,
  position,
  userImage,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <div className={classes.userDetails}>
        <div className={classes.userImageWrapper}>
          <img
            src={userImage || userAvatar}
            alt="user"
            className={classes.userImage}
          />
        </div>
        <h5 className={classes.userName}>{fullname}</h5>
        <h6 className={classes.position}>{position}</h6>
      </div>
      <Divider />
      <List>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/dashboard");
          }}
        >
          <ListItemIcon>
            <DashboardOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/transaction");
          }}
        >
          <ListItemIcon>
            <ImportExportOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Transactions</ListItemText>
        </ListItem>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/networth");
          }}
        >
          <ListItemIcon>
            <MonetizationOnOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Networth</ListItemText>
        </ListItem>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/budget");
          }}
        >
          <ListItemIcon>
            <AssessmentOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Budget</ListItemText>
        </ListItem>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/savings");
          }}
        >
          <ListItemIcon>
            <SaveAltOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Savings</ListItemText>
        </ListItem>
        <ListItem
          className="list__item"
          onClick={() => {
            handleDrawerToggle();
            navigate("/dashboard/goals");
          }}
        >
          <ListItemIcon>
            <CheckBoxOutlined className={classes.green} />
          </ListItemIcon>
          <ListItemText>Goals</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <ContactSupport />
          </ListItemIcon>
          <ListItemText>Support</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText>How Tos</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText>Terms of Use</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <div className={classes.toolbar}>
        <div className={classes.copy}>
          <h6>© WealthyGen Inc. 2020</h6>
          <h6 className="all__right">All rights reserved</h6>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="persistent"
      open={mobileOpen}
      anchor="left"
    >
      {drawer}
    </Drawer>
    // <nav className={classes.drawer} aria-label="mailbox folders">
    //   {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    //   <Hidden smUp implementation="css">
    //     <Drawer
    //       container={container}
    //       variant="temporary"
    //       anchor={theme.direction === "rtl" ? "right" : "left"}
    //       open={mobileOpen}
    //       onClose={handleDrawerToggle}
    //       classes={{
    //         paper: classes.drawerPaper,
    //       }}
    //       ModalProps={{
    //         keepMounted: true, // Better open performance on mobile.
    //       }}
    //     >
    //       {drawer}
    //     </Drawer>
    //   </Hidden>
    //   <Hidden xsDown implementation="css">
    //
    //   </Hidden>
    // </nav>
  );
}
