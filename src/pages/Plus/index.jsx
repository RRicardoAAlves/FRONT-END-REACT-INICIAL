import React from 'react'

import Imagem1 from "../../assets/img/JERI-1.jpg"

import "./style.css";

export default function Plus() {
    return (
        <main className="container m_top">
            <article>
                <h2 className="h_center cor_tit"><strong>Promoção PLUS</strong></h2>

                <h4 className="h_center">* Pacotes fixos de 5 dias *</h4>

            </article>
            <article className="card mb-3 borda_card">
                <header>
                    <img className="card-img-top" src={Imagem1} alt="imagem praia Jericoacoara" />
                </header>
                <section className="card h-100">

                    <h4 className="card-title h_center"><strong>JERICOACOARA - CE</strong></h4>
                    <section id="confg_p">
                        <p id="tam_p">A região tem águas transparentes em cores que variam do azul ao verde, além de piscinas
                            naturais, como a Lagoa do Paraíso, que assumem colorações dignas do Caribe em qualquer época do ano. Que
                            tal aproveitar para relaxar nas tradicionais redes sobre a água de Jericoacoara?</p>
                    </section>

                    
                        <p className="h_center"><strong>Pagamanto em até 12X sem juros: </strong></p>

                        <p className="h_center"><em>De: R$ <del>2400,00</del></em></p>

                    <p className="h_center" id="cor_preco_prom"><strong>Por: R$ 2099,00</strong></p>
                </section>
            </article>
        </main>
    )
}
