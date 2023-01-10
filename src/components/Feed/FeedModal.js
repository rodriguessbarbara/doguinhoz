import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_PHOTO } from "../../api";
import { Erro } from "../Erro";
import Loading from "../Loading";
import PhotoContent from "../Photo/PhotoContent";

import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
