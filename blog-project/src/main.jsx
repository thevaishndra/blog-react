import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >{/*Connecting your Redux store to the React app. */}
    <App />
    </Provider>{/* Wrapping it with a helper (Provider) that gives the app access to the state (Redux store). */}
  </StrictMode>,
)
