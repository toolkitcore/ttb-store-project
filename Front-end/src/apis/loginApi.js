import axiosClient from './axiosClient';

const LOGIN_API_ENDPOINT = '/login';

const loginApi = {
  // api: đăng nhập
  postLogin: (account) => {
    const url = LOGIN_API_ENDPOINT;
    return axiosClient.post(url, account);
  },

  // api: đăng nhập với google
  postLoginWithGoogle: (accessToken) => {
    const url = LOGIN_API_ENDPOINT + '/gg';
    return axiosClient.post(url, accessToken);
  },

  // api: authentication
  getAuth: () => {
    const url = LOGIN_API_ENDPOINT + '/auth';
    return axiosClient.get(url);
  },

  // api: refresh token
  postRefreshToken: (refreshToken) => {
    const url = LOGIN_API_ENDPOINT + '/refresh_token';
    return axiosClient.post(url, refreshToken);
  },

  // api: logout
  postLogout: () => {
    const url = LOGIN_API_ENDPOINT + '/logout';
    return axiosClient.post(url);
  },
};

export default loginApi;
