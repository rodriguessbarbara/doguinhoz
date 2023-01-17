import React, { lazy, Suspense, useEffect } from "react";
import useFetch from "../../../Hooks/useFetch";
import { GET_STATS } from "../../../api";
import Loading from "../../Loading";
import { Erro } from "../../Erro";
import Head from "../../Head";
const Graphs = lazy(() => import("./Graphs"));

const UserStats = () => {
  const { data, loading, erro, request } = useFetch();

  useEffect(() => {
    if (data) {
      async function getData() {
        const { url, options } = GET_STATS();
        await request(url, options);
      }
      getData();
    }
  }, [data, request]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Página de estatísticas do usuário."
        />
        <Graphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
