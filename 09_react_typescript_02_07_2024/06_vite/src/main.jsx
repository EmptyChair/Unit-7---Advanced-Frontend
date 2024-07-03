import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Strict demands var/let/... if variables are declared. Further restrictions apply.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
