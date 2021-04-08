import axios from 'axios';

const BASE_URL = 'http://localhost:3004/menu';

const getAllMenuItems = () => {
  return axios.get(BASE_URL).then(response => {
    console.log(response);
  });
};

const getMenuItemById = id => {
  return axios.get(`${BASE_URL}/${id}`).then(response => {
    console.log(response);
  });
};

export { getAllMenuItems, getMenuItemById };
