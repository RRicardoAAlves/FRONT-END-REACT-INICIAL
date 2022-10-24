import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';
import HeaderP from './components/HeaderP';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import High_standard from './pages/High_standard';
import Plus from './pages/Plus';
import Economica from './pages/Economica';
import Contato from './pages/Contato';
import Listar from './pages/Listar';
import AddCliente from './pages/AddCliente';
import EditCliente from './pages/EditCliente';
import ViewCliente from './pages/ViewCliente';

export default function Rotas() {
    return (
      <Router>
          <Nav />
          <HeaderP />
          <br />
          
          <Routes>
              <Route path="/home" element={<Home />} />
              
              <Route path="/destinos" element={<Destinos />} />
              <Route path="/high_standard" element={<High_standard />} />
              <Route path="/plus" element={<Plus />} />
              <Route path="/economica" element={<Economica />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/add" element={<AddCliente />} />
              <Route path="/edit/:id" element={<EditCliente />} />
              <Route path="/listar" element={<Listar />} />

              <Route path="/view/:id" element={<ViewCliente />} />
              <Route path="*" element={<h1>Página não encontrada.</h1>} />
          </Routes>
          <Footer />
      </Router>
      
    )
  }