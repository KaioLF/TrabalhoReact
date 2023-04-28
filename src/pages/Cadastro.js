import React, { useState } from 'react';
import Title from './../components/Title/index';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [planoSelecionado, setPlanoSelecionado] = useState(null);

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }

  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // enviar dados de cadastro para o servidor aqui
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
  }

  function handlePlanoClick(event) {
    setPlanoSelecionado(event.target.textContent);
  }

  return (
    <div className="form-custom">
      <Title title={'Cadastro'} text="" />
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p>Dados Pessoais</p>
              <label>
                Nome:
                <input type="text" className="form-control" value={nome} onChange={handleNomeChange} />
              </label>
              <br />
              <label>
                Telefone:
                <input type="text" className="form-control" value={telefone} onChange={handleTelefoneChange} />
              </label>
              <br />
              <label>
                Endereço:
                <input type='text' className="form-control" value={endereco} onChange={handleEnderecoChange} />
              </label>
              <br />
              <p>Dados do Cartão</p>
              <label>
                Nome no Cartão:
                <input type="text" className="form-control" value={nomeNoCartao} onChange={handleNomeNoCartaoChange} />
              </label>
              <br />
              <label>
                Número do Cartão:
                <input type="text" className="form-control" maxLength={20} pattern="[0-9]*" />
              </label>
              <br />
              <label>
                CVV:
                <input type='password' className="form-control" maxLength={3} pattern="[0-9]*" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Assinar</button>
          </form>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <p>Planos</p>
            <button type="button" className={`btn ${planoSelecionado === 'Plano A' ? 'btn-success' : 'btn-primary'}`} onClick={handlePlanoClick}>Plano A</button>
            <button type="button" className={`btn ${planoSelecionado === 'Plano B' ? 'btn-success' : 'btn-primary'}`} onClick={handlePlanoClick}>Plano B</button>
          </div>
        </div>
      </div>
    </div>
  )
}
