import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import emptyCartIllustration from '../../assets/productNotFound.jpg';
import styles from './Products.module.css';
import CircularLoader from '../circularLoader';

const Products = () => {
  const { searchedProducts, filteredProducts, loading } = useSelector(state => state);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingAnimContainer}>
          <CircularLoader />
        </div>
      ) : filteredProducts.length === 0 && searchedProducts.length === 0 ? (
        <div className={styles.emptCartContainer}>
          <img className={styles.emptyCart} src={emptyCartIllustration} alt='empty cart' />
          <p className={styles.emptyCartText}>Product not found</p>
        </div>
      ) : (
        filteredProducts.map(value => <ProductItem {...value} key={value.id} />)
      )}
    </div>
  );
};

export default Products;
