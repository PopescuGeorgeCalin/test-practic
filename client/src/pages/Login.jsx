import React from 'react';
import Button from '@material-ui/core/Button';

import server from '../server';

const Login = (props) => {
  const onClick = () => {
    server.post('/login')
      .then((response) => {
        localStorage.setItem('is_logged_in', true);
        localStorage.setItem('token', response.data.token);
        setTimeout(() => { props.history.push('/form'); }, 200);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Login
    </Button>
  );
};

export default Login;
