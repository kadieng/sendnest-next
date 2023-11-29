'use client';

import { useEffect, useState } from 'react';
import { useGetLoggedInUser } from '@/utils/authedRoutes';
import queryClient from '@/utils/queries';
import { User } from '@/@types';

export default function useUser() {
  const { data, isSuccess, isError, refetch } = useGetLoggedInUser();
  const [user, setUser] = useState<User>();

  // console.log(data?.data, 'from useUser');

  useEffect(() => {
    if (isSuccess && !isError) {
      setUser(data?.data);
      queryClient.invalidateQueries(['user']);
    }
  }, [data]);

  return { user, refetch };
}
