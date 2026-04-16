import { useEffect, useState } from 'react';

import { fetchUser } from '@/service/fetchUser';
import { User } from '@/types/User.types';

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
