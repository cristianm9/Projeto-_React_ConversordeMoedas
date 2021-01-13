import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import moment from "moment";
import { Converse } from "../components/Conversor";

const Main = () => {
  //Hooks
  const [time, setTime] = useState(moment().format("LLLL"));

  setInterval(() => {
    setTime(moment().format("LLLL"));
  }, 1000);

  //ComponentDidUpdate()
  useEffect(() => {
    console.log("aswd");
  }, [time]);

  //  ComponentDidMount(){
  //      console.log("Uma vez foda-se")
  //  }

  useEffect(() => {
    console.log("Uma vez foda-se");
  }, []);

  console.log(time);
  return (
    <div className="App">
      <div className={styles.header}>
        <h1>Conversor de Moedas</h1>
        <h4>{time}</h4>
      </div>
      <div className="linha">
        <Converse moedaA="USD" moedaB="BRL" />
        <Converse moedaA="BRL" moedaB="USD" />
      </div>
      <div className="linha">
        <Converse moedaA="CAD" moedaB="BRL" />
        <Converse moedaA="BRL" moedaB="CAD" />
      </div>

      <div className="linha">
        <Converse moedaA="EUR" moedaB="BRL" />
        <Converse moedaA="BRL" moedaB="EUR" />
      </div>
    </div>
  );
};

export default Main;
