import React, { useState } from 'react';
import Search from '../search';
import styles from './Products.module.css';
import filterIcon from '../../assets/filter_alt_FILL0_wght400_GRAD0_opsz48.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToggle } from '../../redux/reducer';

const SearchnFilter = () => {
  const sideBarState = useSelector(state => state.sideBarToggle);
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById('filter');
    const sideBarWidth = element.clientWidth;
    if (sideBarState) {
      element.style.left = '0px';
    } else {
      element.style.left = `-${sideBarWidth}px`;
    }
  }, [sideBarState]);

  return (
    <div className={styles.searchnFilterContainer}>
      <Search />
      <img
        className={styles.filterBtn}
        src={filterIcon}
        alt='filter icon'
        onClick={() => dispatch(changeToggle(true))}
      />
    </div>
  );
};

export default SearchnFilter;
