import React from "react";
import { Link } from "react-router-dom"

import styles from "../../styles/Footer.module.css"

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.png"



const Footer = () => {
  return(
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="TPARF" />
        </Link>
      </div>
      <div className={styles.rights}>
      Все права зарезервированны | Торгово - промышленное Агентство.
      </div>
      <div className={styles.socials}>
        <a
        href="https://vk.com"
        target="_blank"
        rel="noreferrer"
        >
          <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
            </svg>

        </a>
      </div>

    </section>

  )
};

export default Footer;