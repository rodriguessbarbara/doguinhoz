import React, { useContext, useState } from "react";
import styles from './UserHeaderNav.module.css'

import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotosSvg } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticaSvg } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddFotoSvg } from "../../Assets/adicionar.svg";
import { ReactComponent as SairSvg } from "../../Assets/sair.svg";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotosSvg />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <EstatisticaSvg />
        {mobile && 'Estatísticas'}
      </NavLink>

      <NavLink to="/conta/postar">
        <AddFotoSvg />
        {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout}>
        <SairSvg />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
