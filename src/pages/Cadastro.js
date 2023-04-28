import React, { useState } from "react";
import Title from "./../components/Title/index";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvv, setCvv] = useState("");

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }

  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }

  function handleNumeroCartaoChange(event) {
    setNumeroCartao(event.target.value);
  }

  function handleCvvChange(event) {
    setCvv(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // enviar dados de cadastro para o servidor aqui
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
    console.log(`Número do Cartão: ${numeroCartao}, CVV: ${cvv}`);
  }

  function handlePlanoClick(event) {
    setPlanoSelecionado(event.target.textContent);
  }

  return (
    <div className="row">
      <Title title={"Cadastro"} text={""} />
      <div className="col-md-6">
        <div className="form-group">
          <p>Dados Pessoais</p>
          <label>Nome:</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={handleNomeChange}
          />
          <label>Telefone:</label>
          <input
            type="text"
            className="form-control"
            value={telefone}
            onChange={handleTelefoneChange}
          />
          <label>Endereço:</label>
          <input
            type="text"
            className="form-control"
            value={endereco}
            onChange={handleEnderecoChange}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <p>Dados do Cartão</p>
          <label>Nome no Cartão:</label>
          <input type="text" className="form-control" maxLength={50} />
          <label>Número:</label>
          <input
            type="text"
            className="form-control"
            maxLength={20}
            pattern="[0-9]*"
            value={numeroCartao}
            onChange={handleNumeroCartaoChange}
          />
          <label>CVV:</label>
          <input
            type="password"
            className="form-control"
            maxLength={3}
            pattern="[0-9]*"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <div className="form-group">
          <p>Planos</p>
          <button
            type="button"
            className={`btn ${
              planoSelecionado === "Plano A" ? "btn-success" : "btn-primary"
            }`}
            onClick={handlePlanoClick}
          >
            Plano A
          </button>
          <button
            type="button"
            className={`btn ${
              planoSelecionado === "Plano B" ? "btn-success" : "btn-primary"
            }`}
            onClick={handlePlanoClick}
          >
            Plano B
          </button>
        </div>
        <div className="form-group" style={{ marginTop: "20px" }}>
          <button type="submit" className="btn btn-primary">
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
}
