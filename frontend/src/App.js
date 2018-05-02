import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';

import './App.css';
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
