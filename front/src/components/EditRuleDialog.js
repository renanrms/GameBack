import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

function EditRuleDialog({ open, handleClose, title, content, handleUpdateRule}) {
  const [newContent, setNewContent] = useState(content);

  useEffect(() => {
    setNewContent(content)
  }, [open]);

  function validateForm() {
    return newContent.length > 0;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Editar regra
      </DialogTitle>
      <DialogContent>
        <TextField
          disabled
          variant="outlined"
          margin="normal"
          fullWidth
          name="name"
          label="Nome"
          value={title}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="content"
          label="Conteúdo"
          rows={6}
          value={newContent}
          onChange={(event) => { setNewContent(event.target.value) }}
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          disabled={!validateForm()}
          onClick={() => { handleUpdateRule(newContent)} }
          color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EditRuleDialog.propTypes = {
  handleUpdateRule: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}


export default EditRuleDialog;

