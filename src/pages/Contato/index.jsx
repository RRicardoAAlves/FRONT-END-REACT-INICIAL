import React from 'react'

import Imagem1 from "../../assets/img/CONTATOWHATSAPP.png"
import Imagem2 from "../../assets/img/logoemail.png"

import "./style.css";

export default function Contato() {
    return (
        <main>
            <h2 class="about-title h_center cor_tit"><strong>CONTATO ALTO PADRÃO TURISMO</strong></h2>
                
                        <section class="container">
                            <table width="100%" cellpadding="20" id="center_contato">
                                <tr>
                                    <td width="50%" aling="center">
                                        <img src={Imagem1} alt="imagem icone do whatsapp" width="90px" />
                                            <strong>(11) 99999-9999</strong>
                                    </td>
                                    <td width="50%" aling="center">
                                        <img src={Imagem2} alt="imagem icone do" width="100px" />
                                            <strong>contato@altopadraoturismo.com.br</strong>
                                    </td>
                                </tr>
                            </table>
                        </section>

                        <div className="container p-5" style="width: 600px;">
                            <form>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-10 pt-0">Tipo de pessoa:</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="pf" required />
                                            <label className="form-check-label" for="gridRadios1">
                                                Pessoa Física
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="pj" />
                                            <label className="form-check-label" for="gridRadios2">
                                                Pessoa Juridica
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row mb-3">
                                    <label for="inputNome" className="col-sm-2 col-form-label">Nome</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputSobrenome" className="col-sm-2 col-form-label">Cidade</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="cidade" placeholder="Digite sua cidade" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEndereco" className="col-sm-2 col-form-label">Endereço</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="endereco" placeholder="Digite seu endereço" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEstado" className="col-sm-2 col-form-label">Estado</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="estado" required>
                                            <option selected disabled value="">Selecione...</option>
                                            <option>AC</option>
                                            <option>AL</option>
                                            <option>AP</option>
                                            <option>AM</option>
                                            <option>BA</option>
                                            <option>CE</option>
                                            <option>DF</option>
                                            <option>ES</option>
                                            <option>GO</option>
                                            <option>MA</option>
                                            <option>MT</option>
                                            <option>MS</option>
                                            <option>MG</option>
                                            <option>PA</option>
                                            <option>PB</option>
                                            <option>PR</option>
                                            <option>PE</option>
                                            <option>PI</option>
                                            <option>RJ</option>
                                            <option>RN</option>
                                            <option>RS</option>
                                            <option>RO</option>
                                            <option>RR</option>
                                            <option>SC</option>
                                            <option>SP</option>
                                            <option>SE</option>
                                            <option>TO</option>
                                        </select>
                                    </div>
                                    <div className="invalid-feedback">
                                        Por favor, selecione um estado válido.
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEmail" className="col-sm-2 col-form-label">Telefone</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="number" placeholder="Digite seu telefone" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Digite seu email" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group" style="height: 20vh;">
                                        <textarea className="form-control" aria-label="Mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </main>
                    );
}
