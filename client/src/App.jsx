import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Routes from './routes';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Root
        </Link>
        <Link color="inherit" href="/form">
          Form
        </Link>
        <Link color="inherit" href="/login">
          Login
        </Link>
        <Link color="inherit" href="/logout">
          Logout
        </Link>
      </Breadcrumbs>
      <Routes />
    </Container>
  );
}
