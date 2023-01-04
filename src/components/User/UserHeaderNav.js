import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotosSvg } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticaSvg } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddFotoSvg } from "../../Assets/adicionar.svg";
import { ReactComponent as SairSvg } from "../../Assets/sair.svg";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotosSvg />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <EstatisticaSvg />
      </NavLink>
      <NavLink to="/conta/postar">
        <AddFotoSvg />
      </NavLink>
      <button onClick={userLogout}>
        <SairSvg />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
