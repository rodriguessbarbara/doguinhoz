import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from '../Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container containerMain">
      <Head
        title={user}
        description={`Página do usuário ${user}`}
      />

      <h1 className="titulo">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
