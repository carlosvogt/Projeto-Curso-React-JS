import React, { useState } from 'react';

const Membro = ({ nome }) => {
  const [name, setName] = useState(nome);

  function entrar() {
    setName('Carlos Vogt');
  }
  return (
    <div>
      <h2> Bem vindo(a) {name} </h2>
      <button type="button" onClick={entrar}>
        Entrar no Sistema
      </button>
      <button type="button" onClick={() => setName('')}>
        Sair
      </button>
    </div>
  );
};

export default Membro;
