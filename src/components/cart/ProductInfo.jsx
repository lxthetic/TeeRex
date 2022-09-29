import React from 'react';
import styles from './Cart.module.css';

const ProductInfo = ({ imageURL, price, quantity, gender, type, name }) => {
  return (
    <div className={styles.productInfo}>
      <img className={styles.image} src={imageURL} alt='' />
      <ul>
        <li className={styles.genderNtype}>
          {gender}'s {type}
        </li>
        <li>
          <h3 className={styles.productName}>{name}</h3>
        </li>
        <li className={styles.price}>₹{price}</li>
        <li className={styles.quantityLeft}>({quantity}psc. left)</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
