import CartItem from './CartItem';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import cancelIcon from '../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg';
import deleteIcon from '../../assets/delete_FILL0_wght400_GRAD0_opsz48.svg';
import emptyCartIcon from '../../assets/empty-cart-4085814-3385483.webp';
import BillTable from './BillTable';

const Cart = () => {
  const { cartItems, products } = useSelector(state => state);
  const [productsListAsObjects, setProductsListAsObjects] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    products.forEach(v => {
      setProductsListAsObjects(prev => ({ ...prev, [v.id]: v }));
    });
  }, [products]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <img className={styles.backbtn} src={cancelIcon} alt='back icon' onClick={() => navigate('/')} />
        {Object.keys(productsListAsObjects).length > 0 &&
          (Object.keys(cartItems).length === 0 ? (
            <div className={styles.emptyCartContainer}>
              <img className={styles.emptyCart} src={emptyCartIcon} alt='empty cart' />
              <p>Cart is empty</p>
            </div>
          ) : (
            Object.keys(cartItems).map(k => {
              const { selectedQuantity } = cartItems[k];
              const { imageURL, price, quantity, gender, type, name, id } = productsListAsObjects[k];
              return (
                <CartItem
                  key={k}
                  imageURL={imageURL}
                  price={price}
                  quantity={quantity}
                  gender={gender}
                  type={type}
                  name={name}
                  selectedQuantity={selectedQuantity}
                  id={id}
                  deleteIcon={deleteIcon}
                />
              );
            })
          ))}
      </div>
      {Object.keys(cartItems).length > 0 && (
        <BillTable productsListAsObjects={productsListAsObjects} cartItems={cartItems} />
      )}
    </div>
  );
};

export default Cart;
