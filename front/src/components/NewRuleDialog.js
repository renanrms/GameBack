import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import { createRule } from '../api/rules';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: '17px',
    marginBottom: '20px'
  },
}));

export default function NewRuleDialog({ showAllRules, handleOpenSnackbar }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function validateForm() {
    return name.length > 0 && content.length > 0;
  }

  const handleSubmit = () => {
    createRule(name, content)
    .then((response) => {
      const { code, data } = response;
      console.log(response)
      if (code === 200) {
        console.log(data)
        setName('')
        setContent('')
        showAllRules();
        handleClose();
        handleOpenSnackbar("Regra criada com sucesso!", "success");
      } else {
        console.log(response)
        handleClose();
        handleOpenSnackbar("Não foi possível criar a regra. Por favor, tente novamente.", "error")
      }
    })
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Adicionar Nova Regra
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Adicionar nova regra
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para adicionar uma nova regra é necessário atribuir um nome a ela e um conteúdo com as especificações da regra.
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
            name="content"
            label="Conteúdo"
            rows={6}
            value={content}
            onChange={(event) => { setContent(event.target.value) }}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            disabled={!validateForm()}
            onClick={handleSubmit}
            color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}