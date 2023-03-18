import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/categories/categoriesSlice';

function CategorySelector() {
  const dispatch = useDispatch();
  const {categories, categoryFilter} = useSelector((store) => store.categories)
  // const [selectedOption, setSelectedOption] = useState(categoryFilter);

  const handleSelectChange = (event) => {
    // setSelectedOption(event.target.value);
    dispatch(applyFilter(event.target.value))
  };
  return (
    <select value={categoryFilter} onChange={handleSelectChange}>
      {categories.map((category) => (
        <option value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategorySelector