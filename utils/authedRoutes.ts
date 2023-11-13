import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const makeRequest = async <T>(apiUrl: string, method = 'get', data: T | null = null, config = {}) => {
  try {
    const token = sessionStorage.getItem('s_user_token');

    const requestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method,
      url: `https://send-nest.vercel.app/v1/api${apiUrl}`,
      data,
      ...config,
    };

    const response = await axios(requestConfig);

    return response?.data;
  } catch (error: any) {
    console.log(error, 'from authed routes');
    throw error?.response?.data || { message: error.message };
  }
};

export const getLoggedInUser = () => {
  return useQuery(['user'], async () => {
    return makeRequest(`/users/me`, 'get');
  });
};

export const walletBalance = () => {
  return useQuery(['wallet-balance'], async () => {
    return makeRequest(`/wallet/wallet-balance`, 'get');
  });
};
