import axios from 'axios';

const API_URL = 'http://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

const mapper = articles => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title,
  }));
};

// eslint-disable-next-line import/prefer-default-export
export const getArticlesByQuery = () => {
  return axios.get(API_URL + DEFAULT_QUERY).then(response => {
    return mapper(response.data.hits);
  });
};
