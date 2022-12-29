import React from "react";
import styles from "./Forms.module.css";

const Input = ({ label, type, name, value, onChange, onBlur, erro }) => {
  return (
    <div className={styles.inputwrapper}>
      
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {erro ? <p className={styles.erro}>{erro}</p> : ''}
    </div>
  );
};

export default Input;
