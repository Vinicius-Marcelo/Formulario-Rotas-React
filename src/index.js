import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);