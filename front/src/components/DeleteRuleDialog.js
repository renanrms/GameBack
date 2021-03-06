import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DeleteRuleDialog({ open, handleClose, handleDeleteRule, title }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Deletar regra
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deseja realmente deletar a regra <span style={{fontWeight: 'bold'}}>{title}</span> ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDeleteRule} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteRuleDialog.propTypes = {
  handleDeleteRule: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default DeleteRuleDialog;

