import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { storeChangeLogged } from '../store/actions';

const Logout = (props) => {
  const onClick = () => {
    props.logout();
    setTimeout(() => { props.history.push('/'); }, 500);
  };
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Logout
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(storeChangeLogged(false)),
});

export default connect(null, mapDispatchToProps)(Logout);
