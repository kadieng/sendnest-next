import { CreateBeneficiaries, PasswordUpdate, UpdateUser } from '@/@types';
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

export const useGetLoggedInUser = () => {
  return useQuery(['user'], async () => {
    return makeRequest(`/users/me`, 'get');
  });
};

export const useGetWalletBalance = () => {
  return useQuery(['wallet-balance'], async () => {
    return makeRequest(`/wallet/wallet-balance`, 'get');
  });
};

export const useGetBeneficiaries = () => {
  return useQuery(['get-beneficiaries'], async () => {
    return makeRequest(`/users/get_all/beneficiaries`, 'get');
  });
};

export const useCreateBeneficiaries = () => {
  const createBeneficiaries = useMutation((createBeneficiariesData: CreateBeneficiaries): any => {
    return makeRequest(`/users/create/beneficiaries`, 'post', createBeneficiariesData);
  });

  return {
    createBeneficiaries: createBeneficiaries.mutate,
    isLoading: createBeneficiaries.isLoading,
  };
};

export const useUpdateUser = () => {
  const updateUser = useMutation((updateUserData: any): any => {
    return makeRequest(`/users/update-user`, 'patch', updateUserData);
  });

  return {
    updateUser: updateUser.mutate,
    isLoading: updateUser.isLoading,
  };
};

export const usePasswordUpdate = () => {
  const passwordUpdate = useMutation((passwordUpdateData: PasswordUpdate): any => {
    return makeRequest(`/users/password_update`, 'patch', passwordUpdateData);
  });

  return {
    passwordUpdate: passwordUpdate.mutate,
    isLoading: passwordUpdate.isLoading,
  };
};
