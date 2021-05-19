import React, {useState, useEffect} from 'react';
import {
  DataGrid,
  GridToolbarContainer,
} from '@material-ui/data-grid';
import { listEvents, deleteEvent } from '../api/events'
import { IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NewEventDialog from './NewEventDialog';
import DeleteEventDialog from './DeleteEventDialog';

const columns = [
  { field: '_id', headerName: 'ID', width: 400 },
  { field: 'name', headerName: 'Nome', width: 140 },
  { field: 'route', headerName: 'Rota', width: 600 },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "flex-end"
  }
}));

export default function Event() {
  const [events, setEvents] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const handleOpenDeleteEventDialog = () => {
    setIsOpenDeleteDialog(true)
  }

  const handleCloseDeleteEventDialog = () => {
    setIsOpenDeleteDialog(false)
  }

  const handleDeleteEvent = () => {
    deleteEvent(selectionModel[0])
      .then(response => {
        const { code } = response
        if (code === 200) {
          console.log("Evento deletado com sucesso")
          showAllEvents();
        }
      })
    handleCloseDeleteEventDialog();
  }

  useEffect(() => {
    showAllEvents()
  }, []);

  function showAllEvents() {
    listEvents()
      .then(response => {
        const { code, data } = response
        if (code === 200) {
          setEvents(data)
        }
      })
  }

  function CustomToolbar() {
    const classes = useStyles();
    return (
      <GridToolbarContainer className={classes.toolbar}>
        <IconButton color="primary" onClick={handleOpenDeleteEventDialog}>
          <DeleteIcon />
        </IconButton>
          <DeleteEventDialog
            open={isOpenDeleteDialog}
            handleClose={handleCloseDeleteEventDialog}
            handleDeleteEvent={handleDeleteEvent}
            id={selectionModel[0]}
          />
        <NewEventDialog
          showAllEvents={showAllEvents}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <>
    <h1 style={{ textAlign: 'center', marginTop: '0' }}>Eventos</h1>
      <div style={{ height: 440}}>
        <DataGrid
          rows={events}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
          }}
          components={{
            Toolbar: CustomToolbar
          }}
        />
      </div>
    </>
  );
}
