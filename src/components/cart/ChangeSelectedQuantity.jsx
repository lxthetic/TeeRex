import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addOrEditItem,
  addMsg,
  changeSearchedProductQuantity,
  changeProductQuantity,
  changeFilteredProductQuantity,
} from '../../redux/reducer';
import Modal from '../modal';
import QuantityChanger from '../products/QuantityChanger';
import ModalContent from './ModalContent';

const ChangeSelectedQuantity = ({ selectedQuantity, quantity, id }) => {
  const [changeSelectedQuantity, setChangeSelectedQuantity] = useState(selectedQuantity);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (quantity > 0) {
      setChangeSelectedQuantity(prev => prev + 1);
      dispatch(addOrEditItem({ id, selectedQuantity: 1 }));
      dispatch(changeProductQuantity({ id, quantityLeft: quantity - 1 }));
      dispatch(changeFilteredProductQuantity({ id, quantityLeft: quantity - 1 }));
      dispatch(changeSearchedProductQuantity({ id, quantityLeft: quantity - 1 }));
    } else {
      dispatch(addMsg({ type: 'error', msg: 'Product is out of stock!' }));
    }
  };
  const handleSub = () => {
    if (changeSelectedQuantity > 1) {
      setChangeSelectedQuantity(prev => prev - 1);
      dispatch(addOrEditItem({ id, selectedQuantity: -1 }));
      dispatch(changeProductQuantity({ id, quantityLeft: quantity + 1 }));
      dispatch(changeFilteredProductQuantity({ id, quantityLeft: quantity + 1 }));
      dispatch(changeSearchedProductQuantity({ id, quantityLeft: quantity + 1 }));
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <QuantityChanger selectedQuantity={changeSelectedQuantity} add={handleAdd} remove={handleSub} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent setIsOpen={setIsOpen} id={id} selectedQuantity={selectedQuantity} quantity={quantity} />
      </Modal>
    </>
  );
};

export default ChangeSelectedQuantity;
