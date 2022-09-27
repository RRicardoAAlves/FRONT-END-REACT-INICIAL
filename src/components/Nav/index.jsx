import React from 'react'

import Imagem1 from "../../assets/img/LOGO-10.png"

import "./style.css";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-md nav-config cor_nav sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img id="log_nav" src={Imagem1}
          alt="logotipo Alto Padão Turismo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" id="nav-link" aria-current="page" href="index.html"><strong>Home</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="destinos.html"><strong>Destinos</strong></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="promocoes.html" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false"><strong>
                Promoções</strong>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="high_standard.html"><strong>High Standard</strong></a></li>
              <li><a class="dropdown-item" href="plus.html"><strong>Plus</strong></a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="economica.html"><strong> Econômica</strong></a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contato.html"><strong>Contato</strong></a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
          <button class="btn btn-outline-success borda_bot bg-primary" id="nav-link"
            type="submit"><strong>Procurar</strong></button>
        </form>
      </div>
    </div>
  </nav>
  )
}
