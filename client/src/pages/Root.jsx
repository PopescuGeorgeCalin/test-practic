import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'email', headerName: 'Email', width: '50%' },
  { field: 'yob', headerName: 'Year of Birth', width: '50%' },
];

const Root = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const data = localStorage.getItem('data') ?? [];
    setUsers(data);
  }, []);

  return users.length !== 0 ? <h1>NO DATA FOUND</h1> : (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={10} />
    </div>
  );
};

export default Root;
