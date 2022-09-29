import { useState } from 'react';
import { ListItems } from './ListItems';
import styles from './Filters.module.css';

const filterParams = [
  {
    id: 'Color',
    children: ['Red', 'Blue', 'Green'],
  },
  {
    id: 'Gender',
    children: ['Men', 'Women'],
  },
  {
    id: 'Price',
    children: ['0-₹250', '₹251-₹450', '>₹450'],
  },
  {
    id: 'Type',
    children: ['Polo', 'Hoodie', 'Basic'],
  },
];

export function FilterList() {
  const [filters, setFilters] = useState({});

  const handleClick = () => {
    setFilters({});
    const checkBoxes = document.querySelectorAll('.filter-checkbox');
    checkBoxes.forEach(el => {
      if (el.checked) el.checked = false;
    });
  };

  return (
    <ul>
      {filterParams.map(v => (
        <li key={v.id}>
          <h2>{v.id}</h2>
          {<ListItems {...v} filters={filters} setFilters={setFilters} />}
        </li>
      ))}
      <u className={styles.clearAll} onClick={handleClick}>
        Clear All
      </u>
    </ul>
  );
}
