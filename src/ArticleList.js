import React from 'react';

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, link, title }) => (
      <li key={id}>
        <a href={link} target="noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
