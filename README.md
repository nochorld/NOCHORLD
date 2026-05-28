<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NOCHORLD Portal Gate</title>

<style>
body {
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: radial-gradient(circle at top, #141425, #0b0b0f);
    font-family: system-ui, sans-serif;
    color:#e5e7eb;
}

/* LOGIN CARD */
.gate-box {
    width:90%;
    max-width:400px;
    background:#141424;
    border:1px solid #2a2a3a;
    border-radius:18px;
    padding:26px;
    text-align:center;
    box-shadow:0 20px 60px rgba(0,0,0,0.6);
}

/* TITLE */
h1 {
    margin:0;
    color:#818cf8;
    letter-spacing:2px;
}

/* TAGLINE */
.tagline {
    font-size:12px;
    color:#a1a1aa;
    margin:10px 0 15px;
}

/* INPUTS */
input {
    width:100%;
    padding:12px;
    margin:8px 0;
    border-radius:10px;
    border:1px solid #2f2f45;
    background:#151524;
    color:white;
    outline:none;
}

/* BUTTON */
button {
    width:100%;
    padding:12px;
    margin-top:10px;
    border:none;
    border-radius:10px;
    background:linear-gradient(135deg,#6366f1,#4f46e5);
    color:white;
    font-weight:600;
    cursor:pointer;
}

/* STATUS */
.alert-box, .success-box {
    display:none;
    margin-top:10px;
    padding:10px;
    border-radius:10px;
    font-size:13px;
}

.alert-box {
    background:rgba(239,68,68,0.1);
    border:1px solid rgba(239,68,68,0.2);
    color:#f87171;
}

.success-box {
    background:rgba(34,197,94,0.1);
    border:1px solid rgba(34,197,94,0.25);
    color:#4ade80;
}

/* LOADING */
#loadingOverlay {
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.6);
    justify-content:center;
    align-items:center;
    color:#c7d2fe;
    font-size:14px;
}
</style>
</head>

<body>

<div class="gate-box">

    <h1>NOCHORLD ACCESS</h1>

    <div class="tagline">
        Enter your username and your unique subscription key to activate your premium membership.
    </div>

    <input id="usernameInput" placeholder="Username">
    <input id="passwordInput" type="password" placeholder="Access Key">

    <button onclick="validateGate()">Activate Access</button>

    <div id="errorLog" class="alert-box"></div>
    <div id="successLog" class="success-box"></div>

</div>

<div id="loadingOverlay">Authenticating...</div>

<script>

const users = {
    "john_user": { password:"johnnypassword" },
    "alex_reader": { password:"alexprologue" },
    "sam_guest": { password:"samcatalogue" }
};

function validateGate(){

const user = usernameInput.value.trim();
const pass = passwordInput.value.trim();

errorLog.style.display="none";
successLog.style.display="none";

const data = users[user];

if(!data || data.password !== pass){
    return showError("Access denied.");
}

/* LOADING */
loadingOverlay.style.display="flex";

setTimeout(()=>{

loadingOverlay.style.display="none";

/* SESSION */
sessionStorage.setItem("user_authenticated","true");
sessionStorage.setItem("active_user",user);

/* SUCCESS MESSAGE */
showSuccess("Welcome, premium reader! Now dive into the world of books.");

/* REDIRECT */
setTimeout(()=>{
window.location.href="prologue.html";
},900);

},700);

}

/* UI */
function showError(m){
errorLog.innerText=m;
errorLog.style.display="block";
}

function showSuccess(m){
successLog.innerText=m;
successLog.style.display="block";
}

</script>

</body>
</html>
