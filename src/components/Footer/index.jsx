import React from 'react'

import Imagem1 from "../../assets/img/formasdepagamento.webp"

export default function Footer() {
    return (
        <footer id="copy">
            <br />
            <p id="formas_pagamento">
                <strong>Formas de pagamento:</strong>
            </p>
            <img src={Imagem1} alt="Formas de pagamento" width="400px" />

            <br />


            &copy;Alto Padrão Turismo Company - 2022
        </footer>
    )
}
