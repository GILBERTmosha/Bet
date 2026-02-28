import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// REGISTER
window.register = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try{
    await createUserWithEmailAndPassword(auth,email,password);
    alert("Registered Successfully");
  }catch(error){
    alert(error.message);
  }
}

// LOGIN
window.login = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try{
    await signInWithEmailAndPassword(auth,email,password);
    window.location="dashboard.html";
  }catch(error){
    alert(error.message);
  }
}

// FORGOT PASSWORD
window.forgotPassword = async function(){
  const email = document.getElementById("email").value;

  if(!email){
    alert("Enter your email first");
    return;
  }

  try{
    await sendPasswordResetEmail(auth,email);
    alert("Password reset link sent to your email.");
  }catch(error){
    alert(error.message);
  }
}

// LOGOUT
window.logout = async function(){
  await signOut(auth);
  window.location="index.html";
}

// AUTO PROTECT DASHBOARD
onAuthStateChanged(auth, (user)=>{
  if(window.location.pathname.includes("dashboard")){
    if(!user){
      window.location="index.html";
    }
  }
});
