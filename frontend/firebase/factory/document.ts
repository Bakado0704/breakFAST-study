import { DocumentReference } from 'firebase/firestore';

import { create } from '../document/create';
import { get } from '../document/get';
import { update } from '../document/update';

type Repository<T> = {
  get: () => ReturnType<typeof get<T>>;
  create: (inputData: Omit<T, 'updatedAt'>) => ReturnType<typeof create<T>>;
  update: (inputData: Partial<T>) => ReturnType<typeof update<T>>;
};

type CreateRepositoryProps<T> = {
  documentRef: DocumentReference;
  parseT: (value: { [key: string]: unknown }) => T;
};

export const createRepository = <T>({
  documentRef,
  parseT,
}: CreateRepositoryProps<T>): Repository<T> => ({
  get: () => get<T>({ documentRef, parseT }),
  create: (inputData) => create<T>({ documentRef, parseT, inputData }),
  update: (inputData) => update<T>({ documentRef, inputData }),
});
