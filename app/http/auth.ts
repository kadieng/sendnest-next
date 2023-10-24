import axios from 'axios';

const AUTH_HTTP_URL = 'https://send-nest.vercel.app/v1/api';

const $http = axios.create({
  baseURL: AUTH_HTTP_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export const register = async (props: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  address: string;
  middleName: string;
  country: string;
  state: string;
  phone: string;
}) => {
  try {
    const res = await $http.post('/users/signup', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

export const login = async (props: { email: string; password: string }) => {
  try {
    const res = await $http.post('/users/signup', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

export const forgotPassword = async (props: { email: string }) => {
  try {
    const res = await $http.post('/users/signup', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

export const verifyResetPassword = async (props: { otp: string; password: string; email: string }) => {
  try {
    const res = await $http.post('/users/signup', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};
