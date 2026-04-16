import { DocumentReference, serverTimestamp, setDoc } from 'firebase/firestore';

type Props<T> = {
  inputData: Omit<T, 'updatedAt'>;
  documentRef: DocumentReference;
  parseT: (value: { [key: string]: unknown }) => T;
};

export const create = async <T>({
  inputData,
  documentRef,
  parseT,
}: Props<T>): Promise<T> => {
  const data = {
    ...inputData,
    updatedAt: serverTimestamp(),
  };

  const createdObject: T = parseT(inputData);

  await setDoc(documentRef, data);

  return createdObject;
};
