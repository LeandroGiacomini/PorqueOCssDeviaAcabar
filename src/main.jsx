import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/Navbar/Nabar.jsx'
import { Home } from './pages/Home/Home.jsx'
import GlobalStyle from './Style/Global'
import { Footer } from './pages/Components/Footer.jsx'

//App = Navbar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    <Home />
    <Footer />
    <GlobalStyle />
  </React.StrictMode>
)
