import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cartOutlined from '../../assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import cartFilled from '../../assets/shopping_cart_FILL1_wght400_GRAD0_opsz48.svg';
import styles from './NavBar.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CartBtn = () => {
  const cartItems = useSelector(state => state.cartItems);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setCartItemsCount(0);
    Object.keys(cartItems).forEach(v => {
      setCartItemsCount(prev => prev + cartItems[v].selectedQuantity);
    });
  }, [cartItems]);

  return (
    <div className={styles.cartContainer} onClick={() => navigate('/cart')}>
      <img
        className={styles.cartIcon}
        src={pathname === '/cart' ? cartFilled : cartOutlined}
        alt='cart-icon'
      />
      {Object.keys(cartItems).length > 0 && (
        <div className={styles.itemsCount}>
          <div>{cartItemsCount}</div>
        </div>
      )}
    </div>
  );
};

export default CartBtn;
