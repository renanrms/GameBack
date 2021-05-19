import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, TextField } from '@material-ui/core';
import { createEvent } from '../api/events';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function NewEventDialog({ showAllEvents }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [route, setRoute] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    createEvent(name, route)
      .then((response) => {
        const { code, data } = response;
        console.log(response)
        if (code === 200) {
          console.log(data)
          setName('')
          setRoute('')
          showAllEvents();
          handleClose();
        } else {
          console.log(response)
          handleClose();
        }
      })
  }

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Adicionar novo evento
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para adicionar um novo evento é necessário atribuir um nome e sua respectiva rota.
          </DialogContentText>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Nome"
            value={name}
            onChange={(event) => { setName(event.target.value) }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="route"
            label="Rota"
            rows={6}
            value={route}
            onChange={(event) => { setRoute(event.target.value) }}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}