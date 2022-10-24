import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function EditCliente() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf_cnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf_estado, setUf_estado] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  

  const editar = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/clientes/${id}`, {
        tipo_pessoa: tipo_pessoa,
        primeiroNome: nome,
        cpf_cnpj: cpf_cnpj,
        endereco: endereco,
        cidade: cidade,
        uf_estado,uf_estado,
        telefone: telefone,
        email: email,
        mensagem: mensagem,
      })
      .then((result) => {
        console.log("cliente atualizado:" + result.data);
        navigate("/listar");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => { 
    carregaCliente();
  }, []);

  const carregaCliente = async () => { 
    const result = await axios.get(`http://localhost:8080/api/clientes/${id}`)
    console.log(result.data)
    setTipo_pessoa(result.data.tipo_pessoa)
    setNome(result.data.nome)
    setCpf_cnpj(result.data.cpf_cnpj)
    setEndereco(result.data.endereco)
    setCidade(result.data.cidade)
    setUf_estado(result.data.uf_estado)
    setTelefone(result.data.telefone)
    setEmail(result.data.email)
    setMensagem(result.data.mensagem)
  }

  return (
   
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Atualizar Cliente</h2>
          <form>
          <div className="mb-3">
              <label htmlFor="tipo_pessoa" className="form-label">
                Tipo Pessoa
              </label>
              <input
                type="text"
                className="form-control"
                id="tipo_pessoa"
                aria-describedby="tipo_pessoaHelp"
                placeholder="Insira Pessoa Física ou Jurídica"
                value={tipo_pessoa}
                onChange={(e) => setTipo_pessoa(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                aria-describedby="nomeHelp"
                placeholder="Insira seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpf_cnpj" className="form-label">
              Cpf/Cnpj
              </label>
              <input
                type="text"
                className="form-control"
                id="cpf_cnpj"
                placeholder="Insira CPF ou CNPJ"
                value={cpf_cnpj}
                onChange={(e) => setCpf_cnpj(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
              Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                placeholder="Insira Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cidade" className="form-label">
              Cidade
              </label>
              <input
                type="text"
                className="form-control"
                id="cidade"
                placeholder="Insira Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="uf_estado" className="form-label">
              UF/Estado
              </label>
              <input
                type="text"
                className="form-control"
                id="uf_estado"
                placeholder="Insira UF/Estado"
                value={uf_estado}
                onChange={(e) => setUf_estado(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
              Telefone
              </label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                placeholder="Insira Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Não compartilharemos seu email com ninguém.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">
              Mensagem
              </label>
              <input
                type="text"
                className="form-control"
                id="mensagem"
                placeholder="Insira Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={editar}
            >
              Salvar
            </button>
            <Link to="/listar" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}