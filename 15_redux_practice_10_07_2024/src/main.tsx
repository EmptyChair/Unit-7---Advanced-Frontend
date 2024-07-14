import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 4. connect storage
  <Provider store={store}>
    <App />
  </Provider>,
)
