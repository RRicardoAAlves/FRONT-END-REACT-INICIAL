import React from 'react'

import Imagem1 from "../../assets/img/AC-P4.jpg"
import Imagem2 from "../../assets/img/MG-P3.jpg"
import Imagem3 from "../../assets/img/PGL-P3.jpg"
import Imagem4 from "../../assets/img/MAC-P3.jpg"
import Imagem5 from "../../assets/img/UB-P3.jpg"
import Imagem6 from "../../assets/img/TP-P3.jpg"
import Imagem7 from "../../assets/img/AJ-P3.jpg"
import Imagem8 from "../../assets/img/PA-P3.jpg"
import Imagem9 from "../../assets/img/BB-P3.jpg"
import Imagem10 from "../../assets/img/AG-P3.jpg"
import Imagem11 from "../../assets/img/ICP-P3.jpg"
import Imagem12 from "../../assets/img/SG-P3.jpg"

import "./style.css";

export default function Destinos() {
    return (
    <main className="container card-item">
      <h2 className="col-md-12 h_center cor_tit"><strong>DESTINOS PARADISÍACOS</strong></h2>
      <h4>* Pacotes fixos de 5 dias *</h4>

      /* inicio cards /*
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 borda_card">
            <img src={Imagem1} className="card-img-top" alt="imagem praia Arraial do Cabo" />
            <div className="card-body">
              <h5 className="card-title h_center"><strong>ARRAIAL DO CABO - RJ</strong></h5>
              <p className="card-text">A tríade formada por Arraial do Cabo, Búzios e Cabo Frio é um verdadeiro ABC
                tropical,
                com águas que variam entre azul e verde, areia bem clara e cenários naturais deslumbrantes.</p>

            </div>
            <div className=" card-footer">
              <small className="text-muted">
                <p><strong>Pagamanto em até 12X sem juros: </strong></p>
              </small>
              <small className="text-muted">
                <p><em>De: R$ <del>1.446,00</del></em></p>
              </small>
              <small className="text-muted">
                <p id="cor_preco"><strong>Por: R$ 1.999,00</strong></p>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 borda_card">
            <img src={Imagem2} className="card-img-top" alt="imagem praia Maragogi" />
            <div className="card-body">
              <h5 className="card-title h_center"><strong>MARAGOGI - AL</strong></h5>
              <p className="card-text">Localizada em plena Costa dos Corais, a cidade (e suas vizinhas Japaratinga, Porto de
                Pedras e São Miguel dos Milagres) registra a formação de piscinas naturais durante a maré baixa,
                causadas
                pelo represamento dos arrecifes.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <p><strong>Pagamanto em até 12X sem juros: </strong></p>
              </small>
              <small className="text-muted">
                <p><em>De: R$ <del>2.046,00</del></em></p>
              </small>
              <small className="text-muted">
                <p id="cor_preco"><strong>Por: R$ 1849,00</strong></p>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 borda_card">
            <img src={Imagem3} className="card-img-top" alt="imagem praia Porto de Galinhas" />
            <div className="card-body">
              <h5 className="card-title h_center"><strong>PORTO DE GALINHAS - PE</strong></h5>
              <p>Muitas vezes comparada à tropical Punta Cana, na República Dominicana, a cidade mistura boa
                infraestrutura de turismo a praias incríveis, com águas azuis e transparentes, para encantar mais de 1,2
                milhão de visitantes por ano.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <p><strong>Pagamanto em até 12X sem juros: </strong></p>
              </small>
              <small className="text-muted">
                <p><em>De: R$ <del>2.146,00</del></em></p>
              </small>
              <small className="text-muted">
                <p id="cor_preco"><strong>Por: R$ 1.934,00</strong></p>
              </small>
            </div>
          </div>
        </div >
      </div >
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 borda_card">
            <img src={Imagem4} className="card-img-top" alt="imagem praia Maracajau." />
            <div className="card-body">
              <h5 className="card-title h_center"><strong>MARACAJAÚ - RN</strong></h5>
              <p className="card-text">As águas, a 7 km da costa, são tão transparentes que você conseguirá ver no fundo do
                mar peixes, corais e diversas outras espécies da fauna marinha até mesmo sem equipamento de mergulho.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <p><strong>Pagamanto em até 12X sem juros: </strong></p>
              </small>
              <small className="text-muted">
                <p><em>De: R$ <del>1.881,00</del></em></p>
              </small>
              <small className="text-muted">
                <p id="cor_preco"><strong>Por: R$ 1.629,00</strong></p>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 borda_card">
            <img src={Imagem5} className="card-img-top" alt="imagem praia Ubatuba" />
            <div className="card-body">
              <h5 className="card-title h_center"><strong>UBATUBA - SP</strong></h5>
              <p className="card-text">Como a costa da cidade está dividida em diversas praias, existem opções para todos os
                gostos, ou seja, há chances de agradar todo tipo de turista: praias desertas, praias badaladas, praias
                com
                cachoeira e muito mais.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <p><strong>Pagamanto em até 12X sem juros: </strong></p>
              </small>
              <small className="text-muted">
                <p><em>De: R$ <del>1.299,00</del></em></p>
              </small>
              <small className="text-muted">
                <p id="cor_preco"><strong>Por: R$ 1.149,00</strong></p>
              </small>
            </div>
          </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem6} className="card-img-top" alt="imagem praia Taipus de Fora" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>TAIPUS DE FORA - BA</strong></h5>
                        <p className="card-text">Esse destino de Barra Grande, pertinho de Itacaré, tem águas transparentes e
                            azuladas,
                            extensos coqueirais que parecem dançar com o vento, corais multicoloridos e areia bem clarinha!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.919,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.749,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem7} className="card-img-top" alt="imagem praia Arraial d'Ajuda" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>ARRAIAL d'AJUDA - BA</strong></h5>
                        <p className="card-text">Se o Caribe tem Cancun, no México, o Brasil tem Arraial d'Ajuda, um destino que
                            combina
                            sofisticação a cenários paradisíacos, logo ali, no litoral sul da Bahia. O cenário é formado por
                            falésias
                            que colorem o horizonte em diferentes tons de
                            vermelho, areia fina e bem clarinha, coqueirais e, é claro, mar azul-turquesa.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.920,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.699,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem8} className="card-img-top" alt="imagem de Alter do Chão" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>ALTER DO CHÃO - PA</strong></h5>
                        <p className="card-text">Caribe brasileiro em plena Amazônia? Mesmo sem acesso ao
                            mar, oferece uma experiência caribenha a seus banhistas! Em um trecho do rio
                            Tapajós as águas são tão cristalinas quanto azuladas, o que rendeu o apelido caribenho dado pelo jornal
                            britânico The Guardian, que lista Alter do Chão como a praia de rio mais bonita do país.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.889,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.634,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem9} className="card-img-top" alt="imagem praia Bombinhas" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>BOMBINHAS - SC</strong></h5>
                        <p className="card-text">Praias com águas cristalinas no Brasil não são privilégio do Nordeste ou do Sudeste.
                            Um
                            bom exemplo disso é Bombinhas, no litoral de Santa Catarina. As águas da cidade atraem jovens em busca
                            de
                            agito e famílias que procuram sossego à beira-mar.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.781,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.599,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem10} className="card-img-top" alt="imagem praia Angra dos Reis" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>ANGRA DOS REIS - RJ</strong></h5>
                        <p className="card-text">Angra dos Reis está localizada no litoral sul do Estado do Rio de Janeiro, na região
                            conhecida como Costa Verde. Destaca-se no cenário turístico por suas muitas ilhas, algumas com praias de
                            areias brancas e águas cristalinas, e também por seu mar tranquilo, ideal para o turismo náutico.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.399,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.266,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem11} className="card-img-top" alt="imagem praia Ilha do Capeche" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>ILHA DO CAMPECHE - SC</strong></h5>
                        <p className="card-text">A Ilha do Campeche se destaca pela areia branca e pelo mar turquesa, além do
                            movimento
                            mais discreto em comparação a outras praias de Floripa. Como a ilha só pode ser acessada de barco, a
                            região é menos badalada e você poderá curtir as águas sem precisar disputar lugar na areia com grandes
                            multidões.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>1.849,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.628,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
        <div className="col">
            <div className="card h-100 borda_card">
                <img src={Imagem12} className="card-img-top" alt="imagem praia São Miguel do Gostoso" />
                    <div className="card-body">
                        <h5 className="card-title h_center"><strong>SÃO MIGUEL DO GOSTOSO - RN</strong></h5>
                        <p className="card-text">São Miguel do Gostoso é uma simpática vila de pescadores, esse paraíso possui praias
                            com dunas, águas calmas e grandes faixas de areia. O clima pacato, o mar azul e o vento propício para a
                            prática de kitesurf e windsurf colocaram São Miguel do Gostoso na lista das praias mais bonitas do
                            Brasil.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <p><strong>Pagamanto em até 12X sem juros: </strong></p>
                        </small>
                        <small className="text-muted">
                            <p><em>De: R$ <del>2.200,00</del></em></p>
                    </small>
                    <small className="text-muted">
                        <p id="cor_preco"><strong>Por: R$ 1.999,00</strong></p>
                    </small>
            </div>
        </div>
        </div >
      </div >
      
    </main >
  )
}
