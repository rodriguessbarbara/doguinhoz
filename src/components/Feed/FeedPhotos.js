import React, { useEffect } from "react";
import Photos from "./Photos";
import { GET_PHOTOS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { Erro } from "../Erro";
import Loading from "../Loading";

import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const { data, loading, erro, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page: 1, total: 10, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animarEsquerda`}>
        {data.map((photo) => (
          <Photos key={photo.id} photo={photo}/>
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
