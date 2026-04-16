import { UserFormValue } from '@/types/UserForm.types';
import { generateId } from '@/utils/generateId';
import { batchUserCreate } from './batch/blog';

export const createUser = async (user: UserFormValue) => {
  const id = generateId();
  const userObj = { id, ...user };
  await batchUserCreate({ userObj });
};
