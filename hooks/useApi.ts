import axios from 'axios';
import { useRouter } from 'next/navigation';

export const useApi = () => {
  const router = useRouter();

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
      console.log(error, 'from the useApi');
      if (error.response.status === 401) {
        router.push('/login');
        return;
      }
      throw error?.response?.data || { message: error.message };
    }
  };

  return { makeRequest };
};
