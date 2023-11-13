// import axiosAuth from '@/hooks/useAxiosAuth';
import axios, { $http } from '@/utils/http';

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
    const res = await axios.post('/auth/signup', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    throw e?.response?.data || { message: e.message };
  }
};

export const verifyUserToken = async (props: { email: string; otp: string }) => {
  try {
    const res = await axios.post('/users/verify_user_token', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    throw e.response.data || { message: e.message };
  }
};

export const login = async (props: { username: string; password: string }) => {
  try {
    const res = await axios.post('/auth/login', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    throw e.response.data || { message: e.message };
  }
};

export const forgotPassword = async (props: { email: string }) => {
  try {
    const res = await axios.post('/users/reset-password', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

export const verifyResetPassword = async (props: { otp: string; password: string; email: string }) => {
  try {
    const res = await axios.post('/users/verify-reset-password', props);
    console.log(res?.data);
    return res?.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};
