import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';

const columns = [
  { field: 'email', headerName: 'Email', width: '50%' },
  { field: 'yob', headerName: 'Year of Birth', width: '50%' },
];

const Root = ({ data }) => (data.length === 0 ? <h1>NO DATA FOUND</h1> : (
  <div style={{ height: 600, width: '100%' }}>
    <DataGrid rows={data} columns={columns} pageSize={10} />
  </div>
));

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps, null)(Root);
