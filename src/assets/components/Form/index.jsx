import { useState } from "react";
import "./index.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
      Email:  ${email}
      Sua senha é ${senha}
    `);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event) => {
    setSenha(event.target.value);
  };

  return (

    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span>E-mail</span>
        <input type="text" placeholder="Digite seu e-mail" id="email" value={email} onChange={handleEmail}/>
      </label>

      
      <label htmlFor="senha">
        <div className="senha-header">
          <span>Senha</span>
          <span className="forgot">
            <a href="">Esqueceu a senha?</a>
          </span>
        </div>

        <input type="senha" placeholder="Digite sua senha" value={senha} onChange={handleSenha}/>

      </label>

      <button type="submit">Entrar</button>

      <p>Ainda não tem uma conta?{" "} <a href="" className="inscreva-se"> Inscreva-se</a></p>
      
    </form>
  );
}
