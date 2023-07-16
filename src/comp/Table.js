import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { GridDeleteIcon } from '@mui/x-data-grid';

const CustomDataGrid = ({ rows = [], hiddenColumns = [], deleteAction }) => {
  const [tableKey, setTableKey] = useState(0);
  const navigate = useNavigate();

  const handleDelete = async (row) => {
    try {
      await deleteAction(row);
      console.log('Delete success');
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  const columns = useMemo(() => {
    if (rows.length === 0) return [];

    const rowKeys = Object.keys(rows[0]);
    const generatedColumns = rowKeys
      .filter((key) => !hiddenColumns.includes(key))
      .map((key) => ({
        field: key,
        headerName: key,
        width: 150,
        renderHeader: (params) => <div>{params.colDef.headerName}</div>,
      }));

    const deleteColumn = {
      field: 'delete',
      headerName: 'delete',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row)}>
          <GridDeleteIcon />
        </IconButton>
      ),
    };

    generatedColumns.push(deleteColumn);

    return generatedColumns;
  }, [rows, hiddenColumns, handleDelete]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        key={tableKey}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};

export default CustomDataGrid;
