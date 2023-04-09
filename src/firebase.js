// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7fNdayFKbodyd72oD7ADzp20VuKFbDvk",
    authDomain: "cipherschools-50b7f.firebaseapp.com",
    projectId: "cipherschools-50b7f",
    storageBucket: "cipherschools-50b7f.appspot.com",
    messagingSenderId: "801854991902",
    appId: "1:801854991902:web:c5d66b1cd9e6a06a1dc80f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);