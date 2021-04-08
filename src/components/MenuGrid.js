import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          image={item.image}
          price={item.price}
          onDelete={() => onDelete(item.id)}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
