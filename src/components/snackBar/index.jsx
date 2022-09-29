import React from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import SnackbarComponent from './SnackbarComponent';
import styles from './Snackbar.module.css';

const Snackbar = () => {
  const snackbar = useSelector(state => state.snackbar);
  return ReactDom.createPortal(
    <div className={styles.containerOuter}>
      {
        snackbar.map((v, i) => (
          <SnackbarComponent {...v} key={v.id} />
        )) /* .reverse() */
      }
    </div>,
    document.getElementById('snackbar')
  );
};

export default Snackbar;
