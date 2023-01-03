import React, { useContext } from "react";
import styles from "./LoginForm.module.css";
import stylesBtn from '../Forms/Forms.module.css';

import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { Erro } from "../Erro";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, erro, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animarEsquerda">
      <h1 className="titulo">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Logar</Button>
        )}
        <Erro erro={erro} />
      </form>
      <Link className={styles.esqueceuSenha} to="/login/perdeu">
        Esqueceu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitulo}>Cadastrar</h2>
        <p>Ainda não possui conta? Se cadastre agora no site.</p>
        <Link className={stylesBtn.botao} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
