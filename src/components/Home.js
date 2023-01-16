import React from "react";
import Feed from './Feed/Feed';
import Head from "./Head";

const Home = () => {
  return (
  <section className="container containerMain">
    <Head title="Home" description="Página inicial do site Dogs, com feed de fotos." />
    <Feed/>
  </section>
  );
};

export default Home;
