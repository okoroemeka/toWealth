import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'fontsource-roboto';

import store from './store/reducers/';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={2000} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
