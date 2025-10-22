import './App.css';

import { useState } from "react";
import axios from "axios";

function App() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handleSenha(e) {
    setSenha(e.target.value);
    console.log(e.target.value);
  }

  function Logar(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/login", { email: Email, senha: Senha })
      .then((resposta) => {
        if (resposta.status === 200) {
          console.log("Login efetuado com sucesso");
          window.alert("Login efetuado com sucesso");
          window.localStorage.setItem("token", resposta.data.token);
        }
      }).catch((erro) => {
        console.log(erro);
      })
  }

  return (
    <div className="App">
      <form onSubmit={(e) => Logar(e)}>
        <input type="email" placeholder="Email" value={Email} onChange={(e) => handleEmail(e)}></input>
        <input type="password" placeholder="Senha" value={Senha} onChange={(e) => handleSenha(e)}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
