import React from 'react';

const Avatar = ({ image = '', width = 150, height = 95 }) => (
  <img src={image} alt="user avatar" width={width} height={height} />
);

export default Avatar;
