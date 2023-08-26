import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import './index.css'

const store = configureStore({
  reducer: {
    
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>

)
