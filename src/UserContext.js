import React, { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "./api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async function () {
    setData(null);
    setErro(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate('/login');
  }, [navigate])

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);

    // console.log(json);
  }

  async function userLogin(username, password) {
    try {
      setErro(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error(`Erro: Usuário e/ou senha inválido`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setErro(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data , login, erro, loading}}>
      {children}
    </UserContext.Provider>
  );
};
