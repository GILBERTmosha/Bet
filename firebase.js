const firebaseConfig = {
  apiKey: "AIzaSyCJiuNswEQJPj36pFkjpr56jQ5Kp29F2Ww",
  authDomain: "betting-8535b.firebaseapp.com",
  projectId: "betting-8535b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
