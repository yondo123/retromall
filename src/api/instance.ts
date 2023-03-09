import axios from 'axios';

export const request = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_REQUEST_URL
  // baseURL: 'http://localhost:3000'
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

export default request;
