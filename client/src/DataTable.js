import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = 
[
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'mobile', headerName: 'Mobile', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.name || ''} ${row.lastName || ''}`,
  },
  {
    field: '',
    headerName: 'Actions',
    description: 'You need permissions to be able to update or delete.',
    renderCell: () => {
      return (
        <div>
          <button className='btn btn-sm btn-info'>Update</button> &nbsp;
          <button className='btn btn-sm btn-danger'>Delete</button>
        </div>
        
      )
    },
    sortable: false,
    width: 160,
  },
]
  
function getRowId(row) {
  return row._id;
}

const paginationModel = { page: 0, pageSize: 5 }


export default function DataTable(props) {
  return (
    
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={getRowId}
      />
    </Paper>
  )
}