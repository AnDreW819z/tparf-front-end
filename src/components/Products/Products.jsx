import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, images, name, description, price }) => (
          <Link to={`/products/${id}`} key={id} className={styles.product}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images})` }}
            />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{name}</h3>
              <h4 className={styles.title}>{description}</h4>
              <h4 className={styles.title}>{id}</h4>
              <div className={styles.info}>     
                <div className={styles.prices}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(price * 1.05)}$
                  </div>
                </div>

                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} купили
                </div>
              </div>
            </div>
          </Link>
          
        ))}
        
      </div>
      
    </section>
  );
};


export default Products;