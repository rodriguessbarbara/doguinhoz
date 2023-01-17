import React, { useEffect } from "react";
import useFetch from "../../../Hooks/useFetch";
import { GET_STATS } from "../../../api";
import Loading from "../../Loading";
import { Erro } from "../../Erro";
import Head from "../../Head";
import Graphs from "./Graphs";

const UserStats = () => {
  const { data, loading, erro, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <Head
          title="Estatísticas"
          description="Página de estatísticas do usuário."
        />
        <Graphs data={data}/>
      </div>
    );
  else return null;
};

export default UserStats;
