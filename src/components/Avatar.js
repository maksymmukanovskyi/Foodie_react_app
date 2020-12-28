import React from 'react';

const Avatar = ({ image = '', width = 175, height = 175 }) => (
  <img
    className="Avatar"
    src={image}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
