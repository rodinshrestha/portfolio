import axios from '@/utils/axios';

export const userInfo = () => {
  return axios
    .get('/user/')
    .then((res) => res)
    .catch((err) => err);
};
