import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

export default Root;

