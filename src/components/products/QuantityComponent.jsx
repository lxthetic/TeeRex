import { useDispatch } from 'react-redux';
import { addMsg } from '../../redux/reducer';
import styles from './Products.module.css';
import QuantityChanger from './QuantityChanger';

const Quantity = ({ quantity, selectedQuantity, setSelectedQuantity }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (selectedQuantity !== quantity) {
      setSelectedQuantity(prev => prev + 1);
    } else {
      dispatch(addMsg({ type: 'error', msg: 'Product is out of stock!' }));
    }
  };

  const handleSub = () => {
    if (selectedQuantity !== 0) {
      setSelectedQuantity(prev => prev - 1);
    } else {
      dispatch(addMsg({ type: 'error', msg: 'Invalid input' }));
    }
  };

  return (
    <div className={styles.quantityContainer}>
      <QuantityChanger add={handleAdd} remove={handleSub} selectedQuantity={selectedQuantity} />
      <div>Qty: {quantity - selectedQuantity} left</div>
    </div>
  );
};

export default Quantity;
