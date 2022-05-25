import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNedPChDxYyilSSSSS3u_vGrogNrlSpNo",
  authDomain: "akhira-f77e8.firebaseapp.com",
  databaseURL: "https://akhira-f77e8-default-rtdb.firebaseio.com",
  projectId: "akhira-f77e8",
  storageBucket: "akhira-f77e8.appspot.com",
  messagingSenderId: "699314823641",
  appId: "1:699314823641:web:4b622a579924d8b59139c8",
  measurementId: "G-GTQ00EBK0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);