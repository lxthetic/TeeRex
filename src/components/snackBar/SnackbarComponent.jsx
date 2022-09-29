import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import check from '../../assets/check_circle_FILL1_wght400_GRAD0_opsz48.svg';
import cancel from '../../assets/cancel_FILL1_wght400_GRAD0_opsz48.svg';
import close from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg';
import styles from './Snackbar.module.css';
import { removeMsg } from '../../redux/reducer';

const SnackbarComponent = ({ type = 'error', msg = '', id }) => {
  const [percent, setPercent] = useState(0);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(removeMsg({ id }));
  };

  useEffect(() => {
    let timer;
    /*     if (percent <= 100) {
      timer = setInterval(() => {
        setPercent(prev => prev + 100 / 5000);
      }, 0);
    } else {
      // clearInterval(timer);
      dispatch(removeMsg({ id }));
      return () => clearInterval(timer);
    } */
    timer = setTimeout(() => {
      dispatch(removeMsg({ id }));
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={styles.snackbarContainer}
      style={{ backgroundColor: type === 'success' ? 'green' : 'red' }}
    >
      <div className={styles.timer} style={{ width: `${percent}%` }}></div>
      <div className={styles.containerInner}>
        <img className={styles.icon} src={type === 'success' ? check : cancel} alt='icon' />
        <div>{msg}</div>
      </div>
      <img src={close} alt='icon' onClick={handleClose} />
    </div>
  );
};

export default SnackbarComponent;
