import React from 'react'

import Imagem1 from "../../assets/img/FER-1.jpg"

import "./style.css";

export default function High_standard() {
    return (
        <main className="container m_top">
            <article>
                <h2 className="h_center cor_tit"><strong>Promoção HIGH STANDARD</strong></h2>
                
                    <h4 className="h_center">* Pacotes fixos de 5 dias *</h4>
                    
                    </article>
                    <article className="card mb-3 borda_card">
                        <header>
                            <img className="card-img-top" src={Imagem1} alt="imagem praia Fernando de Noronha" />
                        </header>
                        <section className="card h-100">
                            
                                <h4 className="card-title h_center"><strong>FERNANDO DE NORONHA - PE</strong></h4>
                                <section id="confg_p">
                                    <p id="tam_p">A região é protegida por reservas ecológicas e funciona como uma espécie de
                                        santuário marinho, onde milhares de espécies animais e vegetais prosperam e encontram
                                        alimento abundante em qualquer época do ano.O resultado é um mar colorido pelos tons
                                        vibrantes dos peixes e corais que vivem por ali, em meio a águas tão cristalinas que
                                        dispensam a necessidade de snorkel.Você vai se apaixonar pelas paradisíacas baías do Sancho
                                        e dos Porcos, cenários de piscinas naturais incríveis na maré baixa, e a Praia da Atalaia.
                                    </p>
                                </section>
                                
                                    
                                        <p className="h_center"><strong>Pagamanto em até 12X sem juros: </strong></p>
                                       
                                            <p className="h_center"><em>De: R$ <del>2549,00</del></em></p>
                                        
                                            <p className="h_center" id="cor_preco_prom"><strong>Por: R$ 2.199,00</strong></p>
                                        </section>
                                    </article>
                                </main>
                                )
}
