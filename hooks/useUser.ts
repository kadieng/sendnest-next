'use client';

import { useQuery } from '@tanstack/react-query';
import { refreshToken } from '@/app/http/auth';

export default function useUser() {
  const token = sessionStorage.getItem('s_user_token');

  const { data: user, isLoading } = useQuery(['user'], () => refreshToken({ refresh: token }), {
    onSuccess: (data) => {
      if (data.statusCode === 201) {
        console.log(data);

        return;
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
    enabled: !!token,
  });

  return { user };
}
