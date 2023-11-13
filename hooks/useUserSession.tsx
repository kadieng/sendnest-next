import { useRouter } from 'next/navigation';

const useUserSession = () => {
  const router = useRouter();

  const logout = () => {
    const token = sessionStorage.getItem('s_user_token');

    if (token) {
      sessionStorage.removeItem('s_user_token');
      //   notify({
      //     message: 'Logged out',
      //     type: 'success',
      //     theme: 'light',
      //   });

      router.push('/login');
    }
  };
  return { logout };
};

export default useUserSession;
