// ===============================
// FIREBASE IMPORTS
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getDatabase,
ref,
push,
onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// ===============================
// FIREBASE CONFIG
// ===============================

const firebaseConfig = {

apiKey: "AIzaSyAlnVStVsr5JHYA9gPjyyEejhrIRR7Xk0I",

authDomain: "novawallpaper-f7cc8.firebaseapp.com",

databaseURL:
"https://novawallpaper-f7cc8-default-rtdb.firebaseio.com",

projectId: "novawallpaper-f7cc8",

storageBucket:
"novawallpaper-f7cc8.firebasestorage.app",

messagingSenderId:
"380025857124",

appId:
"1:380025857124:web:dec0d1fcaeb61915552b71",

measurementId:
"G-WGWJLPTG88"

};

// ===============================
// INITIALIZE FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const votesRef = ref(db, "votes");

// ===============================
// THEME TOGGLE
// ===============================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

// ===============================
// ELEMENTS
// ===============================

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const totalVotes =
document.getElementById("totalVotes");

const yesVotes =
document.getElementById("yesVotes");

const noVotes =
document.getElementById("noVotes");

const yesPercentLabel =
document.getElementById("yesPercentLabel");

const noPercentLabel =
document.getElementById("noPercentLabel");

const yesBar =
document.getElementById("yesBar");

const noBar =
document.getElementById("noBar");

const statusMessage =
document.getElementById("statusMessage");

// ===============================
// DEVICE ID
// ===============================

let deviceId =
localStorage.getItem("deviceId");

if (!deviceId) {

deviceId =
crypto.randomUUID();

localStorage.setItem(
"deviceId",
deviceId
);

}

// ===============================
// VARIABLES
// ===============================

let voteData = {};

let voted = false;// ===============================
// LOAD LIVE RESULTS
// ===============================

onValue(votesRef, (snapshot) => {

    voteData = snapshot.val() || {};

    let yes = 0;
    let no = 0;

    voted = false;

    Object.keys(voteData).forEach((key) => {

        const vote = voteData[key];

        if (vote.type === "yes") {
            yes++;
        }

        if (vote.type === "no") {
            no++;
        }

        if (vote.deviceId === deviceId) {
            voted = true;
        }

    });

    updateResults(yes, no);

});

// ===============================
// UPDATE RESULTS
// ===============================

function updateResults(yes, no) {

    const total = yes + no;

    totalVotes.textContent = total;

    yesVotes.textContent = yes;

    noVotes.textContent = no;

    const yesPercent =
        total === 0
        ? 0
        : Math.round((yes / total) * 100);

    const noPercent =
        total === 0
        ? 0
        : Math.round((no / total) * 100);

    yesPercentLabel.textContent =
        yesPercent + "%";

    noPercentLabel.textContent =
        noPercent + "%";

    yesBar.style.width =
        yesPercent + "%";

    noBar.style.width =
        noPercent + "%";

    if (voted) {

        statusMessage.textContent =
            "You have already voted.";

    } else {

        statusMessage.textContent = "";

    }

}// ===============================
// SAVE VOTE
// ===============================

async function vote(type) {

    if (voted) {

        statusMessage.textContent =
            "You have already voted.";

        return;
    }

    try {

        await push(votesRef, {

            type: type,

            deviceId: deviceId,

            timestamp: Date.now()

        });

        voted = true;

        statusMessage.textContent =
            "Thank you for voting.";

        yesBtn.disabled = true;
        noBtn.disabled = true;

        yesBtn.style.opacity = "0.6";
        noBtn.style.opacity = "0.6";

    }

    catch (error) {

        console.error(error);

        statusMessage.textContent =
            "Vote failed. Please try again.";

    }

}// ===============================
// BUTTON EVENTS
// ===============================

yesBtn.addEventListener("click", () => {

    if (voted) {

        statusMessage.textContent =
            "You have already voted.";

        return;

    }

    vote("yes");

});

noBtn.addEventListener("click", () => {

    if (voted) {

        statusMessage.textContent =
            "You have already voted.";

        return;

    }

    vote("no");

});

// ===============================
// BUTTON STATE
// ===============================

function updateButtons() {

    if (voted) {

        yesBtn.disabled = true;
        noBtn.disabled = true;

        yesBtn.style.opacity = "0.6";
        noBtn.style.opacity = "0.6";

        yesBtn.style.cursor = "not-allowed";
        noBtn.style.cursor = "not-allowed";

    }

    else {

        yesBtn.disabled = false;
        noBtn.disabled = false;

        yesBtn.style.opacity = "1";
        noBtn.style.opacity = "1";

        yesBtn.style.cursor = "pointer";
        noBtn.style.cursor = "pointer";

    }

}

// ===============================
// AUTO UPDATE BUTTONS
// ===============================

setInterval(updateButtons, 500);// ===============================
// STARTUP
// ===============================

updateButtons();

// ===============================
// CONNECTION STATUS
// ===============================

window.addEventListener("online", () => {

    statusMessage.textContent =
        "Connected to Firebase.";

    setTimeout(() => {

        if (!voted) {

            statusMessage.textContent = "";

        }

    }, 2000);

});

window.addEventListener("offline", () => {

    statusMessage.textContent =
        "No Internet Connection.";

});

// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    updateButtons();

});

// ===============================
// REFRESH LIVE DATA
// ===============================

onValue(votesRef, () => {

    updateButtons();

});

// ===============================
// END
// ===============================
