import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDus3JlM4GyS5W-2jBG9p9KnW9BDmxcElk",
  authDomain: "easyeats-1eccc.firebaseapp.com",
  projectId: "easyeats-1eccc",
  storageBucket: "easyeats-1eccc.firebasestorage.app",
  messagingSenderId: "935797162213",
  appId: "1:935797162213:web:3a6fd86d4a27a72bab540c",
  measurementId: "G-8GG1FT8V8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default app;