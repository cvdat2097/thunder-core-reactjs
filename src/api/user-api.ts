// import request from '../services/request-service';

export const login = async (username: string, password: string) => {
  // await request.get('/employees'); // testing
  return await {
    token: '123',
    refreshToken: '321',
  };
};

export const getNewToken = async (refreshToken: string) => {
  return await {
    token: '123',
    refreshToken: '5646',
  };
};

export const getUser = async () => {
  return await {
    userId: 1,
    username: 'username',
    password: 'password',
    roles: ['admin', 'officer'],
  };
};
