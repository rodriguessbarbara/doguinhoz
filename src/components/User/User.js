import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader/UserHeader";
import Feed from "../Feed/Feed";
import UserPostPhoto from "./UserPostPhoto/UserPostPhoto";
import UserStats from "./UserStats/UserStats";
import { UserContext } from "../../UserContext";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPostPhoto />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
