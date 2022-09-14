import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PaliWalletProvider } from './contexts/provider';
import { PaliMethodsProvider } from './contexts/requests';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <PaliWalletProvider>
      <PaliMethodsProvider>
        <App />
      </PaliMethodsProvider>
    </PaliWalletProvider>
  </React.StrictMode>,
);
