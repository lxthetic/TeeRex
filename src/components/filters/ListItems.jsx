import React, { useEffect, useState } from 'react';
import { addFilteredProducts, addSearchedProducts } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';

export function ListItems({ children, id, filters, setFilters }) {
  const dispatch = useDispatch();
  const searchedProducts = useSelector(state => state.searchedProducts);
  const searchString = useSelector(state => state.searchString);

  useEffect(() => {
    setFilters({});
    const checkBoxes = document.querySelectorAll('.filter-checkbox');
    checkBoxes.forEach(el => {
      if (el.checked) el.checked = false;
    });
  }, [searchString]);

  useEffect(() => {
    let filtering = searchedProducts;
    Object.keys(filters).forEach(v => {
      switch (v) {
        case 'Color': {
          return (filtering = filtering.filter(({ color }) => filters[v].includes(color)));
        }
        case 'Gender': {
          return (filtering = filtering.filter(({ gender }) => filters[v].includes(gender)));
        }
        case 'Price': {
          return (filtering = filtering.filter(({ price }) => {
            return (
              (filters[v].includes('0-₹250') && price <= 250) ||
              (filters[v].includes('₹251-₹450') && 251 <= price && price <= 450) ||
              (filters[v].includes('>₹450') && price > 450)
            );
          }));
        }
        case 'Type': {
          return (filtering = filtering.filter(({ type }) => filters[v].includes(type)));
        }
        default: {
          return filtering;
        }
      }
    });
    dispatch(addFilteredProducts(filtering));
  }, [filters]);

  const handleChange = e => {
    if (e.target.checked) {
      setFilters(prev => ({ ...prev, [id]: [...(prev[id] || []), e.target.value] }));
    } else {
      setFilters(prev => {
        const index = prev[id].indexOf(e.target.value);
        prev[id].splice(index, 1);
        prev[id].length === 0 && delete prev[id];
        return { ...prev };
      });
    }
  };

  return children.map(v => (
    <React.Fragment key={v}>
      <input type='checkbox' id={v} className='filter-checkbox' name={v} value={v} onChange={handleChange} />
      <label htmlFor={v}>{v}</label>
      <br />
    </React.Fragment>
  ));
}
