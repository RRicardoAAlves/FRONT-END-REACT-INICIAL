import React from 'react'

import Imagem1 from "../../assets/img/MOR-2.jpg"

import "./style.css";

export default function Economica() {
    return (
        <main className="container m_top">
            <article>
                <h2 className="h_center cor_tit"><strong>Promoção ECONÔMICA</strong></h2>

                <h4 className="h_center">* Pacotes fixos de 5 dias *</h4>

            </article>
            <article className="card mb-3 borda_card">
                <img className="card-img-top" src={Imagem1} alt="imagem praia Morro de São Paulo" />
                <section className="card h-100">

                    <h4 className="card-title h_center"><strong>MORRO DE SÃO PAULO - BA</strong></h4>
                    <section id="confg_p">
                        <p id="tam_p">As águas são extremamente cristalinas e bem mornas: prato cheio para peixes que buscam comida
                            abundante e para os banhistas, que podem nadar em meio a grande diversidade natural. O litoral está
                            dividido em Primeira Praia, Segunda Praia, Terceira Praia, Quarta Praia, e assim por diante. Quanto mais
                            afastado da Primeira Praia você estiver, mais isolada tende a ser a região!</p>
                    </section>

                   
                        <p className="h_center"><strong>Pagamanto em até 12X sem juros: </strong></p>

                        <p className="h_center"><em>De: R$ <del>2.100,00</del></em></p>

                        <p className="h_center" id="cor_preco_prom"><strong>Por: R$ 1.939,00</strong></p>
                </section>
            </article>
        </main>
    )
}
