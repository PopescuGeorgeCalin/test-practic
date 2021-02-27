import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { storeChangeLogged } from '../store/actions';

const Login = (props) => {
  const onClick = () => {
    props.login();
    setTimeout(() => { props.history.push('/form'); }, 200);
  };
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Login
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(storeChangeLogged(true)),
});

export default connect(null, mapDispatchToProps)(Login);
