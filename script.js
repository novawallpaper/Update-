// ===============================
// THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ===============================
// LOAD VOTES
// ===============================

let votes = JSON.parse(localStorage.getItem("votes")) || [];

// ===============================
// ELEMENTS
// ===============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const totalVotes = document.getElementById("totalVotes");
const yesVotes = document.getElementById("yesVotes");
const noVotes = document.getElementById("noVotes");

const yesPercentLabel = document.getElementById("yesPercentLabel");
const noPercentLabel = document.getElementById("noPercentLabel");

const yesBar = document.getElementById("yesBar");
const noBar = document.getElementById("noBar");

const statusMessage = document.getElementById("statusMessage");

// ===============================
// UPDATE RESULTS
// ===============================

function updateResults() {

    let yes = 0;
    let no = 0;

    votes.forEach(v => {
        if (v === "yes") yes++;
        if (v === "no") no++;
    });

    const total = votes.length;

    totalVotes.textContent = total;
    yesVotes.textContent = yes;
    noVotes.textContent = no;

    const yesPercent = total === 0 ? 0 : Math.round((yes / total) * 100);
    const noPercent = total === 0 ? 0 : Math.round((no / total) * 100);

    yesPercentLabel.textContent = yesPercent + "%";
    noPercentLabel.textContent = noPercent + "%";

    yesBar.style.width = yesPercent + "%";
    noBar.style.width = noPercent + "%";
}

// ===============================
// VOTE
// ===============================

function vote(type) {

    if (localStorage.getItem("alreadyVoted")) {

        statusMessage.textContent = "You have already voted.";

        return;
    }

    votes.push(type);

    localStorage.setItem("votes", JSON.stringify(votes));

    localStorage.setItem("alreadyVoted", "true");

    statusMessage.textContent = "Thank you for voting.";

    updateResults();
}

// ===============================
// BUTTON EVENTS
// ===============================

yesBtn.addEventListener("click", function () {
    vote("yes");
});

noBtn.addEventListener("click", function () {
    vote("no");
});

// ===============================
// START
// ===============================

updateResults();
