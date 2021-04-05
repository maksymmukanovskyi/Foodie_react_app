import React from 'react';

const Logo = ({ image = '', width = 80, height = 60 }) => (
  <img src={image} alt="App_logo" width={width} height={height} />
);

export default Logo;
