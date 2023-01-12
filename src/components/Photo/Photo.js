import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_PHOTO } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { Erro } from "../Erro";
import Loading from "../Loading";
import PhotoContent from "./PhotoContent";
import styles from "./PhotoContent.module.css";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, erro, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [request, id]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`container containerMain ${styles.photo}`}>
        <PhotoContent data={data} single={true}/>
      </section>
    );
  else return null;
};

export default Photo;
