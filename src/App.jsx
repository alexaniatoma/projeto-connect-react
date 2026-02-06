import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from "./pages/home/Home"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Doacao from "./pages/doacao/Doacao"
import Mentoria from "./pages/mentoria/Mentoria"
import Eventos from "./pages/eventos/Eventos"
import Usuario from "./pages/usuario/Usuario"
import Footer from "./components/footer/Footer"
import "./globalStyle.scss"

export default function App() {
  return (
    <>
      <BrowserRouter>
    
        <Header />
          <Routes>            
            <Route path="/" element={<Home />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/voluntariado" element={<Voluntariado/>} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        <Footer /> 

      </BrowserRouter>
    </>   
  )
}

