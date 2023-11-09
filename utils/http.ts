import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import queryClient from './queries';
// import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const AUTH_HTTP_URL = 'https://send-nest.vercel.app/v1/api';

export default axios.create({
  baseURL: AUTH_HTTP_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

// export const axiosAuth = axios.create({
//   baseURL: AUTH_HTTP_URL,
//   timeout: 30000,
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// });

export const $http = axios.create({
  baseURL: AUTH_HTTP_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

// $http.interceptors.request.use(
//   async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
//     const token = sessionStorage.getItem('s_user_token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//       return config;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// $http.interceptors.response.use(
//   function (response: AxiosResponse): AxiosResponse {
//     return response;
//   },
//   function (error: AxiosError | Error): Promise<AxiosError> {
//     if (axios.isAxiosError(error)) {
//       const { message } = error;
//       const { method, url } = error.config as AxiosRequestConfig;
//       const { statusText, status } = (error.response as AxiosResponse) ?? {};

//       switch (status) {
//         case 401: {
//           // "Login required"
//           // push('/register');
//           break;
//         }
//         case 403: {
//           // "Permission denied"
//           break;
//         }
//         case 404: {
//           // "Invalid request"
//           break;
//         }
//         case 500: {
//           // "Server error"
//           break;
//         }
//         default: {
//           // "Unknown error occurred"
//           break;
//         }
//       }

//       if (status === 401) {
//         queryClient.invalidateQueries(['user']);
//         // Router.push('/login');
//         throw message;
//       }
//     }

//     return Promise.reject(error);
//   },
// );
