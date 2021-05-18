import React, {useState, useEffect} from 'react';
import {
  DataGrid,
  GridToolbarContainer,
} from '@material-ui/data-grid';
import { listEvents } from '../api/events'
import { IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NewEventDialog from './NewEventDialog';

const columns = [
  // { field: '_id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nome', width: 300 },
  { field: 'route', headerName: 'Rota', width: 400 },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "flex-end"
  }
}));

export default function EventsPanel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    showAllEvents()
  }, []);

  function showAllEvents() {
    listEvents()
      .then(response => {
        const { code, data } = response
        if (code == 200) {
          setEvents(data)
        }
        console.log(response)
      })
  }

  function CustomToolbar() {
    const classes = useStyles();
    return (
      <GridToolbarContainer className={classes.toolbar}>
        <IconButton color="primary" onClick={() => { console.log("delete clicked!") }}>
          <DeleteIcon />
        </IconButton>
        <NewEventDialog
          showAllEvents={showAllEvents}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div style={{ height: 440}}>
      <DataGrid
        rows={events}
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(row) => row._id}
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  );
}
