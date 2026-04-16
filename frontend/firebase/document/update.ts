import { DocumentReference, updateDoc } from 'firebase/firestore';

type Props<T> = {
  documentRef: DocumentReference;
  inputData: Partial<T>;
};

export const update = async <T>({ documentRef, inputData }: Props<T>) => {
  await updateDoc(documentRef, inputData);
};
