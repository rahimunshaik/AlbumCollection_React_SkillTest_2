import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';

ReactDOM.render(
  // Use BrowserRouter to enable routing functionality in the app
  <BrowserRouter>
    {/* Use React.StrictMode to highlight potential problems in the app during development */}
    <React.StrictMode>
      {/* Render the App component, which serves as the entry point of the application */}
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  // Mount the rendered app inside the element with the id 'root' in the HTML
  document.getElementById('root')
);
