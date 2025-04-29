import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Post from './study01/Post.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Post />
  </StrictMode>,
)
