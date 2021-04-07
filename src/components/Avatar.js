import React from 'react';

const Avatar = ({ image = '', width = 80, height = 80 }) => (
  <img
    className="Avatar"
    src={image}
    alt="User_avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
