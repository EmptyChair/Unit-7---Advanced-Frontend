import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 1. Подключили маршрутизацию, чтобы передавать инструменты по всему аппу */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
