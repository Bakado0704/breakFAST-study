import { parseUserDB } from '@/types/UserDB.types';

export const fetchUser = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/user`);
    const data = await response.json();
    const fetchUser = parseUserDB(data);
    return fetchUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};
