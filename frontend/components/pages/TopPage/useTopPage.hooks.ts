import { fetchUser } from '@/service/fetchUser';
import { User } from '@/types/User.types';
import { useEffect, useState } from 'react';

export const useTopPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      setUser(user);
    };
    getUser();
  }, []);

  return {
    user,
  };
};
