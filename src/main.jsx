import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home.jsx'
import GlobalStyle from './Style/Global'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//App = Navbar

ReactDOM.createRoot(document.getElementById('root')).render(


    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
    </Routes>
    <GlobalStyle />
  </BrowserRouter>

)
