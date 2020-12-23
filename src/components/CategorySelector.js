import React from 'react';

const CategorySelector = ({ options, category, onChange }) => (
  <select value={category} onChange={onChange} onBlur={null}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default CategorySelector;
