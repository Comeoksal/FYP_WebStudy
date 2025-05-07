import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bank from './study01/Bank'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bank />
  </StrictMode>,
)
