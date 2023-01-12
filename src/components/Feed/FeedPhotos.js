import React, { useEffect } from "react";
import Photos from "./Photos";
import { GET_PHOTOS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { Erro } from "../Erro";
import Loading from "../Loading";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, erro, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;

      const { url, options } = GET_PHOTOS({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, [user, page, request, setInfinite]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animarEsquerda`}>
        {data.map((photo) => (
          <Photos key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
