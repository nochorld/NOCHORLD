<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NOCHORLD Portal Gate</title>

<style>
body {
    background:#0b0b0f;
    color:#e2e8f0;
    font-family:Segoe UI,system-ui;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:0;
}

.gate-box {
    background:#12121a;
    padding:35px 25px;
    border-radius:16px;
    width:85%;
    max-width:380px;
    text-align:center;
    border:1px solid #232334;
}

h1 { color:#6366f1; }

input {
    width:100%;
    padding:14px;
    margin-bottom:16px;
    background:#1b1b26;
    border:1px solid #2a2a40;
    color:#fff;
    border-radius:8px;
}

button {
    width:100%;
    padding:14px;
    background:#6366f1;
    color:#fff;
    border:none;
    border-radius:8px;
    font-weight:bold;
    cursor:pointer;
}

.alert-box {
    display:none;
    margin-top:15px;
    padding:10px;
    border-radius:6px;
    background:rgba(248,113,113,0.1);
    border:1px solid rgba(248,113,113,0.2);
    color:#f87171;
}

/* ADMIN PANEL */
#adminPanel {
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#0b0b0ff2;
    padding:20px;
    overflow:auto;
}

.admin-box {
    max-width:500px;
    margin:auto;
    background:#12121a;
    padding:20px;
    border-radius:12px;
    border:1px solid #333;
}

.admin-box h2 {
    color:#22c55e;
}

.small-btn {
    margin-top:8px;
    background:#ef4444;
}
</style>
</head>

<body>

<div class="gate-box">
<h1>NOCHORLD PREMIUM ACCESS</h1>

<input id="usernameInput" placeholder="Username">
<input id="passwordInput" type="password" placeholder="Access Code">

<button onclick="validateGate()">Authenticate</button>
<div id="errorLog" class="alert-box"></div>
</div>

<!-- ADMIN PANEL -->
<div id="adminPanel">
<div class="admin-box">
<h2>ADMIN OVERRIDE PANEL</h2>

<p>Session Controls</p>

<input id="targetUser" placeholder="Target username">

<button onclick="forceLogout()">Force Logout User</button>
<button onclick="resetAll()">Reset ALL Sessions</button>
<button onclick="viewSessions()">View Active Sessions</button>

<div id="sessionView" style="margin-top:10px;color:#93c5fd;"></div>

<button class="small-btn" onclick="closeAdmin()">Close Admin Panel</button>
</div>
</div>

<script>

const userDatabase = {
"john_user": { password:"johnnypassword" },
"alex_reader": { password:"alexprologue" },
"sam_guest": { password:"samcatalogue" }
};

const ADMIN_USER = "admin";
const ADMIN_PASS = "nochorld_admin_2026";

function validateGate() {

const user = document.getElementById("usernameInput").value.trim();
const pass = document.getElementById("passwordInput").value.trim();

/* ADMIN LOGIN */
if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem("is_admin","true");
    document.getElementById("adminPanel").style.display="block";
    return;
}

/* USER LOGIN */
const data = userDatabase[user];

if (!data || pass !== data.password) {
    return showError("Access denied.");
}

/* SESSION OVERRIDE (FORCED LOGOUT OLD SESSION) */
const sessionKey = "active_session_" + user;
localStorage.setItem(sessionKey, crypto.randomUUID());

sessionStorage.setItem("user_authenticated","true");
sessionStorage.setItem("active_user",user);

window.location.href="prologue.html";
}

/* ADMIN FUNCTIONS */

function forceLogout() {
const u = document.getElementById("targetUser").value.trim();
localStorage.removeItem("active_session_" + u);
alert("User logged out: " + u);
}

function resetAll() {
localStorage.clear();
sessionStorage.clear();
alert("All sessions cleared.");
}

function viewSessions() {
let output = "";
for (let i = 0; i < localStorage.length; i++) {
const k = localStorage.key(i);
if (k.startsWith("active_session_")) {
output += k + "<br>";
}
}
document.getElementById("sessionView").innerHTML = output || "No active sessions";
}

function closeAdmin() {
document.getElementById("adminPanel").style.display="none";
}

function showError(msg) {
const el = document.getElementById("errorLog");
el.innerText = msg;
el.style.display = "block";
}

</script>

</body>
</html>
