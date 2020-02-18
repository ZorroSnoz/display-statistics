import * as axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:2000/' });

const apiExpress = {
  getUsers(usersNumber, currentPage) {
    return instance.get(`users-data/${usersNumber}/${currentPage}`);
  },
  getUser(userId, from = 0, before = 7) {
    return instance.get(`user/${userId}/${from}/${before}`);
  }
};

export default apiExpress;