import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import server from '../server';

const columns = [
  {
    field: 'email', headerName: 'Email', flex: 1, sortable: true,
  },
  {
    field: 'yob', headerName: 'Year of Birth', flex: 1, sortable: false,
  },
];

const Root = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    server.get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return users.length === 0 ? <h1>NO DATA FOUND</h1> : (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        sortModel={[
          {
            field: 'email',
            sort: 'asc',
          },
        ]}
      />
    </div>
  );
};
export default Root;
