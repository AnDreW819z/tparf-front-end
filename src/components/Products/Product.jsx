import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";

import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Product.module.css";

//import { addItemToCart } from "../../features/user/userSlice.js";



  const Product = (item) => {
    const {description, price, images, name } = item;
  
    //const dispatch = useDispatch();
  
    const [currentImage, setCurrentImage] = useState();
  
    useEffect(() => {
      if (!images.length) return;
  
      setCurrentImage(images);
    }, [images]);
  
    
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images => (
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${images})` }}
              onClick={() => setCurrentImage(images)}
            />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.price}>{price}$</div>
        

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button
            //onClick={addToCart}
            className={styles.add}
            //disabled={!currentSize}
          >
            Добавить в корзину
          </button>
          <button className={styles.favourite}>Добавить в понравившиеся</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 человек купили</div>

          <Link to={ROUTES.HOME}>Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
