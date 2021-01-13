import React, { useState } from "react";
import styles from "./Conversor.module.css";

// Stateless
export const Converse = (props) => {
  const { moedaA, moedaB } = props;

  //React Hooks
  const [moedaA_valor, setMoedaA_valor] = useState("");
  const [moedaB_valor, setMoedaB_valor] = useState(0);

  //ES6 Switch Case
  const setMoneySign = (money) =>
    ({ USD: "$", BRL: "R$", CAD: "C$", EUR: "€" }[money]);

  const converter = (e) => {
    //Forms
    e.preventDefault();
    const de_para = `${moedaA}_${moedaB}`;

    //Template Strigns
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=7cbc2f65043e596b7100`;

    //Fetch e HTTP
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const cotacao = json[de_para];
        const moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2);
        setMoedaB_valor(moedaB_valor);
      });
  };

  return (
    <form className={styles.conversor} onSubmit={(e) => converter(e)}>
      <h2>
        {moedaA} para {moedaB}
      </h2>
      <input
        type="number"
        step="0.01"
        className={styles.input}
        onChange={(e) => setMoedaA_valor(e.target.value)}
      />
      <input className={styles.submitButton} type="submit" value="Converter" />
      <h2>{`${setMoneySign(moedaB)}${moedaB_valor}`}</h2>
    </form>
  );
};
