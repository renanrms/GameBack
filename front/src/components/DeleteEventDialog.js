import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DeleteEventDialog({ open, handleClose, handleDeleteEvent, id }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Deletar evento
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deseja realmente deletar o evento <span style={{ fontWeight: 'bold' }}>{id}</span> ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDeleteEvent} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteEventDialog.propTypes = {
  handleDeleteEvent: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

export default DeleteEventDialog;

