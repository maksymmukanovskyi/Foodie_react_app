import axios from 'axios';

const BASE_URL = 'http://localhost:3004/menu';

const getAllMenuItems = () => {
  return axios.get(BASE_URL).then(response => response.data);
};

const getMenuItemById = id => {
  return axios.get(`${BASE_URL}/${id}`).then(response => response.data);
};

const deleteMenuItem = id => {
  return axios
    .delete(`${BASE_URL}/${id}`)
    .then(response => response.status === 200);
};

const addMenuItem = item => {
  return axios.post(BASE_URL, item).then(response => response.data);
};

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
