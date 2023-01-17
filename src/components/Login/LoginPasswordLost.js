import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Erro } from "../Erro";
import Head from '../Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, erro, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "https://doguinhoz.vercel.app/login/perdeu",
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Esqueceu senha" description="Página de Password Lost do site Dogs."/>

      <h1 className="titulo">Esqueceu sua senha?</h1>
      {data ? (
        <p style={{color: 'green'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Erro erro={erro} />
    </section>
  );
};

export default LoginPasswordLost;
