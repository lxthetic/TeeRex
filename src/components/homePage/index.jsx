import { useWindowSize } from '../../hooks/useWindowSize';
import Filters from '../filters';
import Products from '../products';
import SearchnFilter from '../products/SearchnFilter';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { windowWidth } = useWindowSize();
  return (
    <div className={styles.container}>
      <Filters />
      {windowWidth < 800 && <SearchnFilter />}
      <Products />
    </div>
  );
};

export default HomePage;
