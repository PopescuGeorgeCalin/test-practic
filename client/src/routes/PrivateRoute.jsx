import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, is_logged_in, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (is_logged_in ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

const mapStateToProps = ({ is_logged_in }) => ({
  is_logged_in,
});

export default connect(mapStateToProps, null)(PrivateRoute);
