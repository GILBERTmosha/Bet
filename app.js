let users = [];
let currentUser = null;
let balance = 10000;
let bets = [];
let totalOdds = 1;

// REGISTER
function register(){
let u = username.value;
let p = password.value;
users.push({u,p,balance:10000});
alert("Registered Successfully");
}

// LOGIN
function login(){
let u = username.value;
let p = password.value;

let user = users.find(x=>x.u===u && x.p===p);
if(user){
currentUser=user;
balance=user.balance;
window.location="dashboard.html";
}else{
alert("Wrong Details");
}
}

// ADMIN SECRET CODE
function adminAccess(){
let code = document.getElementById("adminCode").value;
if(code==="B&R"){
window.location="admin.html";
}else{
alert("Wrong Admin Code");
}
}

// LOGOUT
function logout(){
window.location="index.html";
}

// ADD BET
function addBet(name,odd){
bets.push({name,odd});
totalOdds*=odd;
updateSlip();
}

function updateSlip(){
let out="";
bets.forEach(b=>{
out+=`<p>${b.name} @ ${b.odd}</p>`;
});
slip.innerHTML=out;
totalOddsDisplay=document.getElementById("totalOdds");
totalOddsDisplay.innerText=totalOdds.toFixed(2);
calculateWin();
}

stake.addEventListener("input",calculateWin);

function calculateWin(){
let s=parseFloat(stake.value)||0;
possibleWin.innerText=(s*totalOdds).toFixed(2);
}

function placeBet(){
let s=parseFloat(stake.value);
if(s>balance){alert("Insufficient Balance");return;}
balance-=s;
document.getElementById("balance").innerText=balance;

history.innerHTML+=`<p>Bet ${s} TZS @ ${totalOdds.toFixed(2)}</p>`;

bets=[];
totalOdds=1;
updateSlip();
}

// DEPOSIT
function deposit(){
let amt=parseFloat(prompt("Deposit Amount:"));
if(amt>0){
balance+=amt;
document.getElementById("balance").innerText=balance;
}
}

// WITHDRAW
function withdraw(){
let amt=parseFloat(prompt("Withdraw Amount:"));
if(amt>balance){alert("Not enough balance");return;}
balance-=amt;
document.getElementById("balance").innerText=balance;
}

// ADMIN FUNCTIONS
function addMatch(){
adminOutput.innerHTML+="<p>New Match Added (Demo)</p>";
}

function viewUsers(){
adminOutput.innerHTML=JSON.stringify(users);
}
