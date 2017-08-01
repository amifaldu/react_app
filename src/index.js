import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Toggle from './Toggle';
ReactDOM.render(<App />, document.getElementById('abc'));
registerServiceWorker();
