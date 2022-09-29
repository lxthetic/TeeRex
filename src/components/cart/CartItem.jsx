import React, { useState } from 'react';
import styles from './Cart.module.css';
import ProductInfo from './ProductInfo';
import ChangeSelectedQuantity from './ChangeSelectedQuantity';
import Modal from '../modal';
import ModalContent from './ModalContent';

const CartItem = ({ imageURL, price, quantity, gender, type, name, selectedQuantity, id, deleteIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.itemContainer}>
      <ProductInfo
        imageURL={imageURL}
        price={price}
        quantity={quantity}
        gender={gender}
        type={type}
        name={name}
      />
      <div className={styles.quantityChanger}>
        <ChangeSelectedQuantity selectedQuantity={selectedQuantity} quantity={quantity} id={id} />
      </div>
      <img className={styles.deleteIcon} src={deleteIcon} alt='delete icon' onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent setIsOpen={setIsOpen} id={id} selectedQuantity={selectedQuantity} quantity={quantity} />
      </Modal>
    </div>
  );
};

export default CartItem;
