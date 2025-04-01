import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './study01/Hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APP />
    <Hello />
  </StrictMode>,
)
