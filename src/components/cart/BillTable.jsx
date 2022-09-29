import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';

const BillTable = ({ productsListAsObjects, cartItems }) => {
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    let adder = 0;
    Object.keys(productsListAsObjects).length > 0 &&
      Object.keys(cartItems).forEach(k => {
        adder = adder + productsListAsObjects[k].price * cartItems[k].selectedQuantity;
      });
    setTotalBill(adder);
  }, [cartItems, productsListAsObjects]);

  return (
    <div className={styles.innerContainer} style={{ overflowX: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Summary</h2>
      <table className={styles.billTable}>
        <thead>
          <tr>
            <th align='center'>Name</th>
            <th align='center'>Price</th>
            <th align='center'>Quantity</th>
            <th align='center'>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(productsListAsObjects).length > 0 &&
            Object.keys(cartItems).map(k => {
              const { price, name, id } = productsListAsObjects[k];
              const totalPrice = price * cartItems[k].selectedQuantity;
              return (
                <tr key={id}>
                  <td align='center'>{name}</td>
                  <td align='center'>{price}</td>
                  <td align='center'>{cartItems[k].selectedQuantity}</td>
                  <td align='center'>{totalPrice}</td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td align='center'>
              <b>Total Bill:</b>
            </td>
            <td align='center'>{totalBill}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BillTable;
