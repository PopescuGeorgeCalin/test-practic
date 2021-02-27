import React from 'react';
import Button from '@material-ui/core/Button';

const Logout = (props) => {
  const onClick = () => {
    localStorage.setItem('is_logged_in', false);
    localStorage.removeItem('token');
    setTimeout(() => { props.history.push('/'); }, 200);
  };
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      Logout
    </Button>
  );
};

export default Logout;
