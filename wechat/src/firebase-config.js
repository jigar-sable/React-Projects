import { initializeApp } from '@firebase/app';
import 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "wechat-8cb61.firebaseapp.com",
    projectId: "wechat-8cb61",
    storageBucket: "wechat-8cb61.appspot.com",
    messagingSenderId: "140693799078",
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();