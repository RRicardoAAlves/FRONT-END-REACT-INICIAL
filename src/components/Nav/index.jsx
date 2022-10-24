import React from 'react'
import {Link} from 'react-router-dom';

import Imagem1 from "../../assets/img/LOGO-10.png"

import "./style.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md nav-config cor_nav sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home"><img id="log_nav" src={Imagem1}
          alt="logotipo Alto Padão Turismo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" id="nav-link" aria-current="page" to="/home"><strong>Home</strong></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/destinos"><strong>Destinos</strong></Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/high_standard" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false"><strong>
                Promoções</strong>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/high_standard"><strong>High Standard</strong></Link></li>''
              <li><Link className="dropdown-item" to="/plus"><strong>Plus</strong></Link></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><Link className="dropdown-item" to="/economica"><strong> Econômica</strong></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contato"><strong>Contato</strong></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listar"><strong>Gerenciar Cadastro</strong></Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <Link to="/add" className="btn btn-outline-success borda_bot bg-primary me-2" id="nav-link">Adicionar Cliente</Link>
          <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
          <button className="btn btn-outline-success borda_bot bg-primary" id="nav-link"
            type="submit"><strong>Procurar</strong></button>
        </form>
      </div>
    </div>
  </nav>
  )
}
