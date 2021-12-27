import React, { useState, useEffect } from 'react';
import Membro from './components/Membro/index.js';

const BemVindo = ({ nome }) => {
  return (
    <div>
      <h2>Bem vindo(a) {nome}</h2>
    </div>
  );
};

const Equipe = ({ nome, sobrenome, cargo, facebook, linkedin, youtube }) => {
  return (
    <div>
      <Sobre nome={nome} sobrenome={sobrenome} cargo={cargo} />
      <Social facebook={facebook} linkedin={linkedin} youtube={youtube} />
      <hr />
    </div>
  );
};

const Sobre = ({ nome, sobrenome, cargo }) => {
  return (
    <div>
      <h2>Olá sou o (a) {nome}</h2>
      <h3>Sobrenome: {sobrenome}</h3>
      <h3>Cargo: {cargo}</h3>
    </div>
  );
};

const Social = ({ facebook, linkedin, youtube }) => {
  return (
    <div>
      <a href={facebook}>facebook </a>
      <a href={linkedin}>Linkedin </a>
      <a href={youtube}>Youtube </a>
    </div>
  );
};

function App() {
  const [contador, setContador] = useState(0);
  const date = new Date();
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  });

  function somar() {
    setContador(contador + 1);
  }

  function subtrair() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h3>
        A seguir são apresentados alguns exercicios realizados durante o curso
      </h3>
      <hr />
      <div />
      Olá mundo!
      <BemVindo nome="Carlos" />
      <hr />
      <h1>Conheça a nossa equipe!</h1>
      <Equipe
        nome="Carlos"
        sobrenome="Vogt"
        cargo="Desenvolvedor"
        facebook="https://facebook.com.br"
        linkedin="https://linkedin.com.br"
        youtube="https://youtube.com.br"
      />
      <Equipe nome="Lucas" sobrenome="Silva" cargo="Desenvolvedor 1" />
      <Equipe nome="Pedro" sobrenome="Silveira" cargo="Desenvolvedor 2" />
      <h1>Contador</h1>
      <h3>
        <button type="button" onClick={somar}>
          +
        </button>
        {contador}
        <button type="button" onClick={subtrair}>
          -
        </button>
      </h3>
      <hr />
      <h1>
        Agora são: {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}{' '}
      </h1>
      <hr />
      <Membro nome="Visitante" />
      <hr />
    </div>
  );
}

export default App;
