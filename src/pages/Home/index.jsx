import React from 'react'

import Imagem1 from "../../assets/img/POR-22.jpg"
import Imagem2 from "../../assets/img/TROP-22.jpg"
import Imagem3 from "../../assets/img/PP-1.jpg"
import Imagem4 from "../../assets/img/POR-4.jpg"
import Imagem5 from "../../assets/img/PAR-1.jpg"
import Imagem6 from "../../assets/img/CARD-P.jpg"

import "./style.css";

export default function
  Home() {
  return (

    <main className="container" id="-marg_imag">
      <article className="container">
        <h2 className="card-text container" id="center_contato">Seja bem vindo a maior, melhor e única agência de turismo de
          alto padrão
          com expertise em praias paradisíacas do nosso espetacular litoral brasileiro. Confira nossos
          <strong> DESTINOS</strong> e
          <strong> PROMOÇÕES</strong>.
        </h2>
      </article>
      <br />
      <br />

      <article id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <section className="carousel-inner">
          <figure className="carousel-item active">
            <img src={Imagem1} className="d-block w-100" id="carr_bord" alt="imagem pôr do sol na praia" />
          </figure>
          <figure className="carousel-item">
            <img src={Imagem2} className="d-block w-100" id="carr_bord" alt="imagem praia paradisíaca" />
          </figure>
          <figure className="carousel-item">
            <img src={Imagem3} className="d-block w-100" id="carr_bord" alt="imagem outra praia paradisíaca" />
          </figure>
        </section>
      </article>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <section className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </section>

    <br />
    <br />
    <h2 class="card-text container" id="center_contato">Viajar com a ALTO PADRÃO TURISMO é ter a melhor experiêcia da
      sua vida, com os melhores preços e o mais alto padrão de qualidade !!!</h2>
    <br />
    <h2 class="card-text container" id="center_contato"><strong>VAMOS NESSA?</strong></h2>

    <br/>
    <br/>

      <article class="container h_center">
        <section class="row row-cols-1 row-cols-md-3 g-4 h_center">
          <section class="col">
            <div class="card h-100" id="carr_bord">
              <img src={Imagem4} class="card-img-top imag_bor" alt="imagem praia com barquinhos" />
            </div>
          </section>
          <section class="col">
            <div class="card h-100" id="carr_bord">
              <img src={Imagem5} class="card-img-top imag_bor" alt="imagem praia azul turquesa " />
            </div>
          </section>
          <section class="col">
            <div class="card h-100 imag_bor" id="carr_bord">
              <img src={Imagem6} class="card-img-top imag_bor" alt="imagem praia com coqueiros e rede" />
            </div>
          </section>

        </section>
      </article>



    </main>

  )
}
