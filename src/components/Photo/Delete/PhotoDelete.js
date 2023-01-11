import React from "react";
import { DELETE_PHOTO } from "../../../api";
import useFetch from "../../../Hooks/useFetch";

import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm("Deseja realmente excluir a foto?");
    if (confirm) {
      const { url, options } = DELETE_PHOTO(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
