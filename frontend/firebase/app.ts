import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

interface FirestoreWithEmulator extends Firestore {
  _settingsFrozen: unknown;
}

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const isEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true';
const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(clientCredentials);
initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
export const db = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

const isServer = typeof window === 'undefined';
// ブラウザ(フロントエンド)はlocalhostで動作、サーバではbackendを使用
// githubActionsではフロント・バックエンドともにlocalhostを使用
const emulatorHost = isServer
  ? (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST ?? 'backend')
  : 'localhost';

if (isEmulator) {
  const dbWithEmulator = db as FirestoreWithEmulator;
  if (!dbWithEmulator._settingsFrozen) {
    connectFirestoreEmulator(db, emulatorHost, 8081);
    connectAuthEmulator(auth, `http://${emulatorHost}:9099`, {
      disableWarnings: true,
    });
    connectStorageEmulator(storage, emulatorHost, 9199);
    connectFunctionsEmulator(functions, emulatorHost, 5001);
  }
}

export default firebaseApp;
