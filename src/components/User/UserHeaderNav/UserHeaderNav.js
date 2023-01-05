import React, { useContext, useEffect, useState } from "react";
import styles from "./UserHeaderNav.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { ReactComponent as MinhasFotosSvg } from "../../../Assets/feed.svg";
import { ReactComponent as EstatisticaSvg } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AddFotoSvg } from "../../../Assets/adicionar.svg";
import { ReactComponent as SairSvg } from "../../../Assets/sair.svg";
import useMedia from "../../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 640px");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.botaoMobile} ${
            mobileMenu && styles.botaoMobileAtivo
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileAtivo
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotosSvg />
          {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <EstatisticaSvg />
          {mobile && "Estatísticas"}
        </NavLink>

        <NavLink to="/conta/postar">
          <AddFotoSvg />
          {mobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={userLogout}>
          <SairSvg />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
