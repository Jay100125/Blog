import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { ContextProvider } from './context/Context.js'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
