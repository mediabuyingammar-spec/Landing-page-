// ======================================
// Configuration
// ======================================

const REDIRECT_URL = "https://temu.to/k/et8ctyts6k3";
const REDIRECT_DELAY = 3;

// ======================================
// Countdown
// ======================================

let seconds = REDIRECT_DELAY;
const counter = document.getElementById("count");

counter.textContent = seconds;

const countdown = setInterval(() => {

    seconds--;

    counter.textContent = seconds;

    if (seconds <= 0) {

        clearInterval(countdown);

        if (typeof fbq !== "undefined") {
            fbq("trackCustom", "RedirectToTemu");
        }

        window.location.href = REDIRECT_URL;
    }

}, 1000);

// ======================================
// Button Click
// ======================================

document
    .getElementById("continueBtn")
    .addEventListener("click", function () {

        if (typeof fbq !== "undefined") {
            fbq("track", "Lead");
            fbq("trackCustom", "ContinueButtonClicked");
        }

    });
