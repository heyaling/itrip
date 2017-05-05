import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from './router'
import '././common/css/style.css'

ReactDOM.render(
  <Router
    history={hashHistory}
    routes={routes} />,
  document.getElementById('root')
);
