import axios, { AxiosRequestConfig } from 'axios';
import * as AuthService from './auth-service';

const requestAuthInterceptor = (
  req: AxiosRequestConfig
): AxiosRequestConfig => {
  const token = AuthService.getToken();
  if (token) {
    return {
      ...req,
      headers: {
        Authorization: token,
      },
    };
  }
  return req;
};

const instance = axios.create({
  // baseURL: 'http://dummy.restapiexample.com/api/v1', // hard code for testing
  baseURL: process.env.REACT_APP_API_ENDPOINT
});

instance.interceptors.request.use(requestAuthInterceptor);

export default instance;
