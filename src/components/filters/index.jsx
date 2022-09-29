import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filters.module.css';
import { FilterList } from './FilterList';
import close from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg';
import { changeToggle } from '../../redux/reducer';
import { useWindowSize } from '../../hooks/useWindowSize';

const Filters = () => {
  const sideBarState = useSelector(state => state.sideBarToggle);
  const dispatch = useDispatch();

  const { windowWidth } = useWindowSize();

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
    <div className={styles.container} id='filter'>
      <div className={styles.filterHeader}>
        <h1>Filter</h1>
        {windowWidth < 800 && (
          <img
            src={close}
            alt='close icon'
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          />
        )}
      </div>
      <FilterList />
    </div>
  );
};

export default Filters;
