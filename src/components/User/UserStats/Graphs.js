import React, { useEffect, useState } from "react";

import styles from "./UserStats.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const Graphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(data);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animarEsquerda`}>
      <div className={`${styles.total} ${styles.item}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.item}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
            fillOpacity: .8,
            stroke: '#fff',
            strokeWidth: 2,
          },
          labels: {
            fontSize: '16',
            fill: '#333',
          }
        }}
        />
      </div>

      <div className={styles.item}>
        <VictoryChart>
          <VictoryBar data={graph} alignment={'start'}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default Graphs;
