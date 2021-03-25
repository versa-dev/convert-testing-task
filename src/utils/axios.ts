import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject((error.response && error.response.data) || 'Something went wrong')
  }
);

export default axiosInstance;
