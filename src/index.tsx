import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

<<<<<<< HEAD
=======
if (process.env.NODE_ENV === "development") {
  const{ worker } = require("./mock/browser");
  worker.start();
}

>>>>>>> 067a098 (Final)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);