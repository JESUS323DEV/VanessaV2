import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import"./styles/Header.css"
import"./styles/Hero.css"
import"./styles/AboutMe.css"
import"./styles/ServicesButtons.css"
import"./styles/ServicesDetails.css"
import"./styles/Map.css"
import"./styles/Form.css"
import"./styles/Footer.css"

import './styles/Responsive.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
