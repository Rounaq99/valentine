const startBtn = document.getElementById("startBtn");
const choices = document.getElementById("choices");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    choices.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
    result.textContent = "💖 Yay! You made my day! 💖";
    result.style.color = "#d10047";
    result.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
    result.textContent = "💔 Oh no… Still, I care about you 💫";
    result.style.color = "#4a0000";
    result.classList.remove("hidden");
});
