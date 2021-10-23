import axios from 'axios';

const API_KEY = '23145866-da154062db79be09da281bc6e';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
};

export const fetchPictures = async (queryName, page = 1) => {
  const response = await axios.get(
    `?q=${queryName}&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
  );
  return response.data.hits;
};

