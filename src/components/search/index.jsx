import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchedProducts, storeString } from '../../redux/reducer';
import styles from './Search.module.css';

const Search = () => {
  // const searchedProducts = useSelector(state => state.searchedProducts);
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearchedProducts(allProducts));
  }, []);

  const isMatching = (value, name, color, type) => {
    const lcName = name.toLowerCase();
    const lcColor = color.toLowerCase();
    const lcType = type.toLowerCase();

    return lcName.includes(value) || lcColor.includes(value) || lcType.includes(value);
  };

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(storeString(value));
    const splittedValue = value.split(' ');
    const newArr = allProducts.filter(({ name, color, type }) => {
      for (let valueItem of splittedValue) {
        if (!isMatching(valueItem, name, color, type)) return false;
      }
      return true;
    });

    dispatch(addSearchedProducts(newArr));
  };
  return (
    <input className={styles.searchInput} type='text' placeholder='Search here...' onChange={handleChange} />
  );
};

export default Search;
