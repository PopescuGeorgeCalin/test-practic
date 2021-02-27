/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button } from '@material-ui/core';

import server from '../server';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const checkEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const checkYob = (yob) => {
  const nowYear = (new Date()).getFullYear();
  return yob >= 1900 && yob <= nowYear;
};

const Form = (props) => {
  const [user, setUser] = useState({
    email: '',
    yob: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    yob: false,
  });

  const onChange = ({ target }) => {
    switch (target.id) {
    case 'email':
      setUser({
        ...user,
        email: target.value,
      });
      break;
    case 'yob':
      setUser({
        ...user,
        yob: 1 * target.value,
      });
      break;
    default:
      break;
    }
  };

  const onClick = () => {
    const validEmail = checkEmail(user.email);
    const validYob = checkYob(1 * user.yob);

    setErrors({
      email: !validEmail,
      yob: !validYob,
    });

    if (validEmail && (validYob)) {
      server.post('/users', user)
        .then((resp) => {
          console.log(resp.data);
          props.history.push('/');
        }).catch((err) => {
          console.log(err);
        });
    }
  };

  const classes = useStyles();
  return (
    <Box component="div" m={1}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
        />
        <TextField
          required
          id="yob"
          name="yob"
          label="Year Of Birth"
          value={user.yob}
          type="number"
          onChange={onChange}
          error={errors.yob}
        />
        <Button variant="contained" color="primary" onClick={onClick}>Add User</Button>
      </form>
    </Box>
  );
};

export default Form;
