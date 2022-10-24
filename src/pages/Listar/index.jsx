import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from "axios";

export default function Listar() {

//Listagem
const [cliente, setCliente] = useState([]);

const listarCliente = async () => {
    try{
      await axios.get("http://localhost:8080/api/clientes").then((response) => {setCliente(response.data)})
    } catch (erro){
        alert(erro.message);
    }
};

useEffect(() => {listarCliente();}, [])

//Deletar
const {id} = useParams();

const deleteCliente = async (id) => { 
  try { 
    await axios.delete(`http://localhost:8080/api/clientes/${id}`)
    .then((response) => {
      alert('Cliente excluido.')
      listarCliente();
    })
  } catch (erro) { 
    alert(erro.message)
  }
}

  return (
    <div className="container">
    <div className="py-4">
      <table className="table table-striped border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tipo Pessoa</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF/CNPJ</th>
            <th scope="col">Endereço</th>
            <th scope="col">Cidade</th>
            <th scope="col">UF-Estado</th>
            <th scope="col">Telefone</th>
            <th scope="col">Email</th>
            <th scope="col">Mensagem</th>
            <th scope="col"> - </th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((cliente, key) => (
            <tr>
              <th scope="row" key={key}>{key + 1}</th>
              <td> {cliente.tipo_pessoa} </td>
              <td> {cliente.nome} </td>
              <td> {cliente.cpf_cnpj} </td>
              <td> {cliente.endereco} </td>
              <td> {cliente.cidade} </td>
              <td> {cliente.uf_estado} </td>
              <td> {cliente.telefone} </td>
              <td> {cliente.email} </td>
              <td> {cliente.mensagem} </td>
              <td> 
                <Link to={`/view/${cliente.id}`} className="btn btn-outline-success mx-1">
                  Ver
                </Link>
                <Link to={`/edit/${cliente.id}`} className="btn btn-success mx-1">
                  Editar
                </Link>
                <button className="btn btn-danger mx-1" onClick={() => deleteCliente(cliente.id)}>
                  Excluir
                </button>
                 </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
