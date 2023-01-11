import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { ReactComponent as EnviarSvg } from "../../Assets/enviar.svg";
import { POST_COMMENT } from "../../api";
import { Erro } from "../Erro";

import styles from './CommentsForm.module.css';

const CommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, erro } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_COMMENT(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente algo legal"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.botao}>
        <EnviarSvg />
      </button>
      <Erro erro={erro} />
    </form>
  );
};

export default CommentsForm;
