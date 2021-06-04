import { decamelizeKeys } from 'humps';
import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(config => {
  const newConfig = { ...config };
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});

export default api;
