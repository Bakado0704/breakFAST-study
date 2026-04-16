import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { createRepository as createCollectionRepository } from '@/firebase/factory/collection';
import { parseUser } from '@/types/User.types';

export const userRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.BLOG,
  parseT: parseUser,
});
