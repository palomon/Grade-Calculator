import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
