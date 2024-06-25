// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDlV7SB2nLw0oVwStMwr2f0DG40byMa2es",
	authDomain: "makara-db4cc.firebaseapp.com",
	projectId: "makara-db4cc",
	storageBucket: "makara-db4cc.appspot.com",
	messagingSenderId: "533141768508",
	appId: "1:533141768508:web:5db24b115ea0d80891b639",
	measurementId: "G-1373EJEQG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)
const analytics = getAnalytics(app);
