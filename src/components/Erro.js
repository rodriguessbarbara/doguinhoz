import React from "react";

export const Erro = ({ erro }) => {
  if (!erro) return null;

  return <p className="erro">{erro}</p>;
};
