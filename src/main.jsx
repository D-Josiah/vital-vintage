import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header_p from './Header_p.jsx'
import Footer_p from './Footer_p.jsx'
import './scss/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header_p />
 
    <Footer_p />
  </StrictMode>,
)
