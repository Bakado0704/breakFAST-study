import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { fetchUser } from '@/service/fetchUser';
import { UserDB } from '@/types/UserDB.types';

export const useTopPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserDB | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      setUser(user);
    };
    getUser();
  }, []);

  const navigateToInput = () => {
    router.push('/input');
  };

  return {
    user,
    navigateToInput,
  };
};
