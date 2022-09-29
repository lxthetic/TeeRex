import React from 'react';
import styles from './Products.module.css';

const QuantityChanger = ({ add, remove, selectedQuantity }) => {
  return (
    <div className={styles.selectQuantity}>
      <button
        onClick={add}
        // disabled={quantity === selectedQuantity}
      >
        +
      </button>
      <div>{selectedQuantity}</div>
      <button
        onClick={remove}
        // disabled={selectedQuantity === 0}
      >
        -
      </button>
    </div>
  );
};

export default QuantityChanger;
