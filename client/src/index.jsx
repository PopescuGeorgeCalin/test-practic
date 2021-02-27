import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import reducer from './store/reducers';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk),
));

store.subscribe(() => console.log('State changed: ', store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
