import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/categories/categoriesSlice';

function CategorySelector() {
  const dispatch = useDispatch();
  const { categories, categoryFilter } = useSelector((store) => store.categories);

  const handleSelectChange = (event) => {
    dispatch(applyFilter(event.target.value));
  };
  return (
    <select className="px-2 pb-1 pt-2 text-sky-900 bg-white" value={categoryFilter} onChange={handleSelectChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
