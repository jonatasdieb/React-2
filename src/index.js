import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import { Provider } from 'react-redux';
import App from './App';
import Login from './Components/Autenticacao/Login';
import { isAuthenticated } from './Services/AuthService';
import * as serviceWorker from './serviceWorker';

if (isAuthenticated()){
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
} else {
    ReactDOM.render(<Provider store={store}><Login /></Provider>, document.getElementById('root'));
}


serviceWorker.unregister();
