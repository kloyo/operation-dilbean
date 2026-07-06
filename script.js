// =========================
// Operation Dilbean 💜
// FULL CLEAN SCRIPT (Parts 2–5)
// =========================


// =========================
// ELEMENTS
// =========================

const envelope = document.getElementById("envelope");
const startButton = document.getElementById("startButton");
const map = document.getElementById("map");

const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const finalScreen = document.getElementById("finalScreen");
const replayBtn = document.getElementById("replayBtn");


// =========================
// ENVELOPE LOGIC
// =========================

envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

startButton.addEventListener("click", (e) => {
    e.stopPropagation();

    envelope.style.opacity = "0";

    setTimeout(() => {
        envelope.style.display = "none";
        map.classList.remove("hidden");

        // activate easter egg wiggles
        ["egg1", "egg2", "egg3"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add("wiggleHint");
        });

    }, 700);
});


// =========================
// POPUP SYSTEM
// =========================

function openPopup(title, text) {
    popupTitle.innerText = title;
    popupText.innerText = text;

    overlay.classList.remove("hidden");
    popup.classList.remove("hidden");
}

function closePopup() {
    overlay.classList.add("hidden");
    popup.classList.add("hidden");
}

overlay.addEventListener("click", closePopup);
window.closePopup = closePopup;


// =========================
// STAR DATA
// =========================

const stars = [
    {
        id: "star1",
        title: "📚 IB Resits",
        text: "You’re not starting over. You’re finishing properly this time.\n\nSlow progress still counts."
    },
    {
        id: "star2",
        title: "🧠 UCAT",
        text: "One question at a time.\nNot the whole future at once.\n\nYou’re stronger than panic."
    },
    {
        id: "star3",
        title: "📅 November Exams",
        text: "You already learned this once.\nNow it’s refinement, not discovery."
    },
    {
        id: "star4",
        title: "📨 Results (December)",
        text: "Whatever happens is information, not identity.\n\nWe adjust, we don’t panic."
    }
];


// assign normal stars
stars.forEach(star => {
    const el = document.getElementById(star.id);
    if (!el) return;

    el.onclick = () => openPopup(star.title, star.text);
});


// =========================
// STAR 5 (SPECIAL ENDING TRIGGER)
// =========================

const star5 = document.getElementById("star5");

if (star5) {
    star5.onclick = () => {
        openPopup(
            "🌟 The Fork in the Road",
            "Medicine → UCAT + resits + applications\n\nOR\n\nNew path → econ / finance / London life\n\nBoth are valid.\nNeither is failure.\n\n→ completing mission..."
        );

        setTimeout(() => {
            showFinalScreen();
        }, 2200);
    };
}


// =========================
// EASTER EGGS
// =========================

const eggs = [
    {
        id: "egg1",
        title: "👀 psst",
        text: "You’re allowed to be unsure.\nJust don’t be mean to yourself about it."
    },
    {
        id: "egg2",
        title: "🐆 jaguar note",
        text: "Still here. Still rooting for you."
    },
    {
        id: "egg3",
        title: "🚗 side quest",
        text: "One day: windows down, music up, no stress."
    }
];

eggs.forEach(egg => {
    const el = document.getElementById(egg.id);
    if (!el) return;

    el.onclick = () => openPopup(egg.title, egg.text);
});


// =========================
// PARTICLES
// =========================

const particleContainer = document.getElementById("particles");

function createParticle() {
    if (!particleContainer) return;

    const p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (6 + Math.random() * 6) + "s";
    p.style.opacity = Math.random();

    particleContainer.appendChild(p);

    setTimeout(() => p.remove(), 12000);
}

setInterval(createParticle, 400);


// =========================
// JAGUAR
// =========================

function spawnJaguar() {
    const j = document.createElement("div");
    j.id = "jaguar";
    j.innerText = "🐆";
    document.body.appendChild(j);
}

spawnJaguar();


// =========================
// FINAL SCREEN + CONFETTI
// =========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 140; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 2,
            color: `hsl(${260 + Math.random() * 60}, 100%, 70%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.r, c.r);

        c.y += c.speed;

        if (c.y > canvas.height) {
            c.y = -10;
        }
    });

    requestAnimationFrame(drawConfetti);
}

function showFinalScreen() {
    if (!finalScreen) return;

    finalScreen.classList.remove("hidden");

    createConfetti();
    drawConfetti();
}


// =========================
// REPLAY
// =========================

if (replayBtn) {
    replayBtn.onclick = () => {
        location.reload();
    };
}
