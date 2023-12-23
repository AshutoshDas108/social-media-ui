import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
//import { applyMiddleware, createStore } from 'redux';
import {store} from './redux/store'
import { BrowserRouter } from 'react-router-dom';

//No need to createStore again already created in store.js 
//const store = createStore(() => [], {}, applyMiddleware());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
