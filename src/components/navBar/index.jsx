import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.svg';
import Search from '../search';
import CartBtn from './CartBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { windowWidth } = useWindowSize();

  return (
    <nav className={styles.NavBar}>
      <img className={styles.logo} src={logo} alt='logo' onClick={() => navigate('/')} />
      {pathname === '/' && windowWidth > 800 && <Search />}
      {/* <ul className={styles.navList}> */}
      {/* <li>Products</li> */}
      {/* <li> */}
      <CartBtn />
      {/* </li> */}
      {/* </ul> */}
    </nav>
  );
};

export default NavBar;
