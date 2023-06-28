import React from "react";

import styles from "../../styles/Home.module.css";
import BG from "../../images/computer.png";
const Poster = () => (

   <section className={styles.home}>
   <div className={styles.title}>скидка 20%</div>
   <div className={styles.product}>
     <div className={styles.text}>
       <div className={styles.subtitle}>самый продаваемый товар 2022</div>
       <h1 className={styles.head}>Ручной инструмент Электроинструмент Toolbox </h1>
       <button className={styles.button}>Купить сейчас</button>
          </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>

);

export default Poster;