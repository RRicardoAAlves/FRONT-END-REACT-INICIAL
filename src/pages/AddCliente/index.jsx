import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AddCliente() {
  const navigate = useNavigate();

  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf_cnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf_estado, setUf_estado] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");


  const salvar = async (e) => {
    e.preventDefault();
    console.log(tipo_pessoa, nome, cpf_cnpj, endereco, cidade, uf_estado, telefone, email, mensagem);
    await axios
      .post("http://localhost:8080/api/clientes", {
        tipo_pessoa: tipo_pessoa,
        nome: nome,
        cpf_cnpj: cpf_cnpj,
        endereco: endereco,
        cidade: cidade,
        uf_estado: uf_estado,
        telefone: telefone,
        email: email,
        mensagem: mensagem,
      })
      .then((result) => {
        alert("cliente adicionado.");
        navigate("/listar");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Registro de Cliente</h2>
          <form>
          <div className="mb-3">
              <label htmlFor="exampleInputTipo_pessoa1" className="form-label">
              Tipo Pessoa
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTipo_pessoa1"
                value={tipo_pessoa}
                onChange={(e) => setTipo_pessoa(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNome1" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNome1"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputCpf_cnpj1" className="form-label">
                CPF/CNPJ
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCpf_cnpj1"
                value={cpf_cnpj}
                onChange={(e) => setCpf_cnpj(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEndereco1" className="form-label">
              Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEndereco1"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputCidade1" className="form-label">
              Cidade
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCidade1"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputUf_estado1" className="form-label">
              Uf/Estado
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUf_estado1"
                value={uf_estado}
                onChange={(e) => setUf_estado(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputTelefone1" className="form-label">
              Telefone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTelefone1"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              <div className="mb-3">
              <label htmlFor="exampleInputMensagem1" className="form-label">
              Mensagem
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputMensagem1"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={salvar}
            >
              Salvar
            </button>
            <Link to="/listar" type="submit" className="btn btn-outline-danger mx-2">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
