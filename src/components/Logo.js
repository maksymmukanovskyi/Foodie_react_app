import React from 'react';

const Logo = ({ image = '', width = 150, height = 95 }) => (
  <img src={image} alt="site logo" width={width} height={height} />
);

export default Logo;
