import axios from 'axios';

const API_URL = 'http://hn.algolia.com/api/v1/search?query=';

const mapper = articles => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title,
  }));
};

// eslint-disable-next-line import/prefer-default-export
export const getArticlesByQuery = (query = '') => {
  return axios.get(API_URL + query).then(response => {
    return mapper(response.data.hits);
  });
};
