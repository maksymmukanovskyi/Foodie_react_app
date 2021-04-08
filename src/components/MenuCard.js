import React from 'react';

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>{price}</p>
    <div type="action">
      <button type="button" onClick={onShowMoreInfo}>
        More Info
      </button>
      <button type="button" onClick={onDelete}>
        Delete Order
      </button>
    </div>
  </div>
);

export default MenuCard;
