import axios from 'axios';
import { refreshToken } from '@/app/http/auth';
import { useAuth } from '@/context/AuthContext';
import { useQuery } from '@tanstack/react-query';

interface AxiosRequestConfig<T = any> {
  // ...
  data?: any;
}

export const useRefreshToken = () => {
  const { user } = useAuth();

  const AUTH_HTTP_URL = 'https://send-nest.vercel.app/v1/api';

  const api = axios.create({
    baseURL: AUTH_HTTP_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${user?.refreshToken}`,
    },
  });

  const refreshTokenFunc = async () => {
    const requestConfig: AxiosRequestConfig = {};
    requestConfig.data = { refresh: user?.refreshToken };

    const res = await api.get('/users/me', requestConfig);

    if (user) user.accessToken = res.data.accessToken;
  };

  return refreshTokenFunc;
};
