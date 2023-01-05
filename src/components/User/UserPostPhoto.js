import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./UserPostPhoto.module.css";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { Erro } from "../Erro";

import { POST_PHOTO } from "../../api";

const UserPostPhoto = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, erro, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);


  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.imgToSend);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = POST_PHOTO(formData, token);
    request(url, options);
  }

  function handleImg({ target }) {
    setImg({
      imgToSend: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <section className={`${styles.postPhoto} animarEsquerda`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input className={styles.imgFile} type="file" name="img" id="img" onChange={handleImg} />

        {loading ? (
          <Button disabled>Enviando..</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro erro={erro} />
      </form>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPostPhoto;
