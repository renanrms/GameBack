import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nome', width: 300 },
  { field: 'route', headerName: 'Rota', width: 400 },
];

const mockData = [
  { id: 1, name: 'Evento 1', route: 'rota do evento 1'},
  { id: 2, name: 'Evento 2', route: 'rota do evento 2' },
  { id: 3, name: 'Evento 3', route: 'rota do evento 3' },
  { id: 4, name: 'Evento 4', route: 'rota do evento 4'},
  { id: 5, name: 'Evento 5', route: 'rota do evento 5'},
  { id: 6, name: 'Evento 6', route: null},
  { id: 7, name: 'Evento 7', route: 'rota do evento 7'},
  { id: 8, name: 'Evento 8', route: 'rota do evento 8'},
  { id: 9, name: 'Evento 9', route: 'rota do evento 9'},
];

export default function EventsPanel() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={mockData}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
