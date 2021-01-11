const choicesEl = document.getElementById("choices");
const textArea = document.getElementById("textarea");

let choiceArr = [];

createChoice();

textArea.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
  checkText(e.key);
});

function checkText(input) {
  if (input === ",") {
    addChoice();
    choiceArr = [];
  } else if (input === "Enter") {
    playRandom();
  } else {
    choiceArr.push(input);
    displayChoice(choiceArr);
  }
}

function displayChoice(choice) {
  const choiceEl = document.getElementById("current-choice");
  choiceEl.style.display = "block";
  const choiceText = choice.join("");
  choiceEl.innerText = choiceText;
}

function createChoice() {
  const choiceEl = document.createElement("div");
  choiceEl.classList.add("choice");
  choiceEl.id = "current-choice";
  choiceEl.style.display = "none";
  choicesEl.appendChild(choiceEl);
}

function addChoice() {
  const choiceEl = document.getElementById("current-choice");
  choiceEl.id = "saved-choice";
  createChoice();
}

function playRandom() {
  const choices = document.querySelectorAll(".choice");

  let max = choices.length - 1;
  let random = 0;

  const randomInterval = setInterval(() => {
    random = Math.floor(Math.random() * max);
    choices[random].classList.add("active");
    setTimeout(() => {
      choices[random].classList.remove("active");
    }, 100);
  }, 200);

  setTimeout(() => {
    clearInterval(randomInterval);
    setTimeout(() => {
      choices[random].classList.add("active");
    }, 100);
  }, 3000);
}
