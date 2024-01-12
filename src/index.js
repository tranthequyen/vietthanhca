import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'
import "./App.css"
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <App />

  </Provider>
);


