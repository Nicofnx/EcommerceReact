import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext'
import reducer, { initialState } from './context/reducer'
import {BasketProvider} from './context/BasketContext'
import './firebase'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider initialState ={initialState} reducer={reducer}>
      <DataProvider>
        <App />
      </DataProvider>
    </BasketProvider>
  </React.StrictMode>
);


