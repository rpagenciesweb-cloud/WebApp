import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCcM2YSwxALq1jG9-V7d6yGLredBumEMb8",
    authDomain: "shopweb-1ada3.firebaseapp.com",
    projectId: "shopweb-1ada3",
    storageBucket: "shopweb-1ada3.firebasestorage.app",
    messagingSenderId: "75424915754",
    appId: "1:75424915754:web:78a775ded208783d597e53"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);