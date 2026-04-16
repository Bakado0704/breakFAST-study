import { DocumentReference, getDoc } from 'firebase/firestore';

import { timestampToDate } from '@/service/timestampToDate';

type Props<T> = {
  documentRef: DocumentReference;
  parseT: (value: { [key: string]: unknown }) => T;
};

export const get = async <T>({ documentRef, parseT }: Props<T>): Promise<T> => {
  const snapshot = await getDoc(documentRef);
  if (!snapshot.exists())
    throw new Error(`There is not specified data: ${documentRef.path}`);

  const datum = timestampToDate(snapshot.data());

  try {
    return parseT(datum);
  } catch (error) {
    console.log(`Document: ${documentRef.path}`);
    console.error(error);
    throw error;
  }
};
