import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { createRepository as createCollectionRepository } from '@/firebase/factory/collection';
import { parseUserDB } from '@/types/UserDB.types';

export const userRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.USER,
  parseT: parseUserDB,
});
