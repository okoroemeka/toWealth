import { confirmAlert } from "react-confirm-alert";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

import "react-confirm-alert/src/react-confirm-alert.css";

export default function ConfirmAlert({ title, onSuccess, onClose }) {
  confirmAlert({
    customUI: () => {
      return (
        <Card>
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
          <CardActions>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={() => onSuccess}
            >
              Yes
            </Button>
            <Button
              type="button"
              variant="text"
              color="secondary"
              onClick={() => onClose}
            >
              No
            </Button>
          </CardActions>
        </Card>
      );
    },
  });
}
