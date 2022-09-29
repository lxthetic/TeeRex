import React from 'react';
import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { addOrEditItem, changeSearchedProductQuantity, changeProductQuantity } from '../../redux/reducer';

const ModalContent = ({ setIsOpen, id, selectedQuantity, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(addOrEditItem({ id, selectedQuantity: -selectedQuantity }));
    dispatch(changeProductQuantity({ id, quantityLeft: quantity + selectedQuantity }));
    dispatch(changeFilteredProductQuantity({ id, quantityLeft: quantity + selectedQuantity }));
    dispatch(changeSearchedProductQuantity({ id, quantityLeft: quantity + selectedQuantity }));
    setIsOpen(false);
  };
  return (
    <>
      <h2 style={{ margin: 0 }}>Remove Item</h2>
      <p>Are you sure you want to remove this item?</p>
      <div className={styles.modalButtons}>
        <button className={styles.removeBtn} onClick={handleRemoveItem}>
          Remove
        </button>
        <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default ModalContent;
