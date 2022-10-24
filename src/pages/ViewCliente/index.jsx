import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewCliente() {
  const { id } = useParams();

  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf_cnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf_estado, setUf_estado] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  
  useEffect(() => {
    carregaCliente();
  }, []);

  const carregaCliente = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/clientes/${id}`
    );
    console.log(result.data);
    setTipo_pessoa(result.data.tipo_pessoa)
    setNome(result.data.nome)
    setCpf_cnpj(result.data.cpf_cnpj)
    setEndereco(result.data.endereco)
    setCidade(result.data.cidade)
    setUf_estado(result.data.uf_estado)
    setTelefone(result.data.telefone)
    setEmail(result.data.email)
    setMensagem(result.data.mensagem)
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Atualizar Cliente</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {id}</div>
                <div className="card-body">
                <p className="card-title">
                    <b>Tipo Pessoa: </b> {tipo_pessoa}
                  </p>
                  <p className="card-title">
                    <b>Nome: </b> {nome}
                  </p>
                  <p className="card-title">
                    <b>CPF/CNPJ: </b> {cpf_cnpj}
                  </p>
                  <p className="card-title">
                    <b>Endereco: </b> {endereco}
                  </p>
                  <p className="card-title">
                    <b>Cidade: </b> {cidade}
                  </p>
                  <p className="card-title">
                    <b>UF/Estado: </b> {uf_estado}
                  </p>
                  <p className="card-title">
                    <b>Telefone: </b> {telefone}
                  </p>
                  <p className="card-title">
                    <b>E-mail: </b> {email}
                  </p>
                  <p className="card-title">
                    <b>Mensagem: </b> {mensagem}
                  </p>
                  <Link
                    to="/listar"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
