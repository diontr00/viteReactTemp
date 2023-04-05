import './index.css';

import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
