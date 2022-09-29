import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addOrEditItem,
  addMsg,
  changeSearchedProductQuantity,
  changeProductQuantity,
  changeFilteredProductQuantity,
} from '../../redux/reducer';
import styles from './Products.module.css';
import Quantity from './QuantityComponent';

const ProductItem = ({ id, imageURL, name, type, price, currency, color, gender, quantity }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleATC = () => {
    if (selectedQuantity === 0) {
      dispatch(addMsg({ type: 'error', msg: 'Quantity cannot be 0' }));
    } else {
      dispatch(addMsg({ type: 'success', msg: 'Product(s) added!' }));
      setSelectedQuantity(0);
      dispatch(addOrEditItem({ id, selectedQuantity }));
      dispatch(changeProductQuantity({ id, quantityLeft: quantity - selectedQuantity }));
      dispatch(changeFilteredProductQuantity({ id, quantityLeft: quantity - selectedQuantity }));
      dispatch(changeSearchedProductQuantity({ id, quantityLeft: quantity - selectedQuantity }));
    }
  };

  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={imageURL} alt={name} />
      <div className={styles.genderNtype}>
        {gender}'s {type}
      </div>
      <h3 className={styles.productName}>{name}</h3>
      <div className={styles.priceNcolorContainer}>
        <div className={styles.price}>₹{price}</div>
        <div className={styles.color} style={{ backgroundColor: color }}></div>
      </div>
      <Quantity
        quantity={quantity}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <button className={styles.atcBtn} onClick={handleATC}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
