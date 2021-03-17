import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
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
      <DialogTitle id="modal-title">{title}</DialogTitle>
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
