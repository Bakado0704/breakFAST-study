import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/firebase/client';
import { UserDB } from '@/types/UserDB.types';

type UserCreateProps = {
  userObj: UserDB;
};

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const userDoc = (userId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.USER, userId);

export const batchUserCreate = async ({ userObj }: UserCreateProps) => {
  const batch = writeBatch(db);
  batch.set(userDoc(userObj.id), exceptForId(userObj));
  await batch.commit();
};
