import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';
import close from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={styles.outerContainer} onClick={onClose}>
      <div className={styles.innerContainer}>
        <img className={styles.closeIcon} src={close} alt='close btn' onClick={onClose} />
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
