import React from "react";
import styles from "../../styles/Home.module.css";

import bannerImg from "../../images/banner.png";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        Летняя распродажа
        <span></span>
      </p>
      <button className={styles.more}> купить сейчас</button>
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
    </div>
  </section>
);

export default Banner;