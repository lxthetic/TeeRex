import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/400 Error Bad Request-bro copy.png';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.errorimg} src={errorImg} alt='error illustration' />
      <button className={styles.errorBtn} onClick={() => navigate('/', { replace: true })}>
        GO BACK HOME
      </button>
    </div>
  );
};

export default ErrorPage;
