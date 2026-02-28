// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJiuNswEQJPj36pFkjpr56jQ5Kp29F2Ww",
  authDomain: "betting-8535b.firebaseapp.com",
  projectId: "betting-8535b",
  storageBucket: "betting-8535b.firebasestorage.app",
  messagingSenderId: "725692794270",
  appId: "1:725692794270:web:de7c52bc641d0a3e2fc28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
