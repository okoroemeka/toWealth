import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

export default function index({ children, onOpen, onClose, title, subtitle }) {
  return (
    <Dialog
      maxWidth="xs"
      open={onOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <Box display="flex" justifyContent="space-between">
        <DialogTitle id="modal-title">{title}</DialogTitle>
        <Button type="button" onClick={() => onClose()}>
          <Close />
        </Button>
      </Box>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}

index.propTypes = {
  children: PropTypes.element.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
