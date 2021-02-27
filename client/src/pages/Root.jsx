import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';

import { uuid } from 'uuidv4';

const columns = [
  {
    field: 'email', headerName: 'Email', flex: 1, sortable: true,
  },
  {
    field: 'yob', headerName: 'Year of Birth', flex: 1, sortable: false,
  },
];

const Root = ({ data }) => (data.length === 0 ? <h1>NO DATA FOUND</h1> : (
  <div style={{ height: 600, width: '100%' }}>
    <DataGrid
      rows={data}
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
));

const mapStateToProps = ({ data }) => ({
  data: data.map((user) => ({ ...user, id: uuid() })),
});

export default connect(mapStateToProps, null)(Root);
