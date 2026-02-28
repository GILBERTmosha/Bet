// REGISTER
function register(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)
.then(()=> alert("Registered Successfully"))
.catch(err=> alert(err.message));
}

// LOGIN
function login(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)
.then(()=> window.location="dashboard.html")
.catch(err=> alert(err.message));
}

// LOGOUT
function logout(){
auth.signOut().then(()=> window.location="index.html");
}

// ENROLL COURSE
function enroll(course,points){
let user = auth.currentUser;
if(!user){ alert("Login first"); return;}

db.collection("enrollments").add({
user:user.email,
course:course,
points:points,
time:firebase.firestore.FieldValue.serverTimestamp()
}).then(()=>{
alert("Enrolled in "+course);
calculatePoints();
});
}

// CALCULATE TOTAL POINTS
function calculatePoints(){
let user = auth.currentUser;
let total = 0;

db.collection("enrollments")
.where("user","==",user.email)
.get()
.then(snapshot=>{
snapshot.forEach(doc=>{
total += doc.data().points;
});
document.getElementById("totalPoints").innerText = total;
});
}

if(window.location.pathname.includes("dashboard")){
auth.onAuthStateChanged(user=>{
if(user){ calculatePoints(); }
else{ window.location="index.html"; }
});
}

// ADMIN VIEW
function viewEnrollments(){
db.collection("enrollments").get().then(snapshot=>{
let output="";
snapshot.forEach(doc=>{
let data = doc.data();
output += `<p>${data.user} - ${data.course} (${data.points}x)</p>`;
});
document.getElementById("users").innerHTML=output;
});
}
