import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import Reset from './components/styles/generic/reset'
import Base from './components/styles/elements/base'


ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Base/>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
