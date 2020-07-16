let quotes_array6 = [
  "statue",
  "generate",
  "stubborn",
  "developer",
  "stubborn",
  "runaway",
  "javascript",
  "nutrition",
  "cocktail",
  "revolver",
  "siblings",
  "investigate",
];

let TIME_LIMIT6 = 6;
let timer_text6 = document.querySelector(".currCal_time6");
let acc_text6 = document.querySelector(".currCal_accu6");
let err_text6 = document.querySelector(".currCal_error6");
let wpm_text6 = document.querySelector(".currCal_wpm6");
let quote_text6 = document.querySelector("#quote6");
let input_area6 = document.querySelector("#textArea6");
let restart_btn6 = document.querySelector("#restart_btn6");
let wpm_grp6 = document.querySelector(".wpm6");
let err_grp6 = document.querySelector(".errors6");
let acc_grp6 = document.querySelector(".accuracy6");
let start6 = document.getElementById("reset6");
let time_left6 = TIME_LIMIT6;
let time_elapsed6 = 0;
let total_errors6 = 0;
let errors6 = 0;
let accuracy6 = 0;
let characterTyped6 = 0;
let current_quote6 = "";
let quoteNo6 = 0;
let timer6 = null;
start6.addEventListener("click", startGame6);

function updateQuote6() {
  quote_text6.textContent = null;
  quoteNo6 = Math.floor(Math.random() * quotes_array6.length);
  current_quote6 = quotes_array6[quoteNo6];
  current_quote6.split("").forEach((char) => {
    const charSpan6 = document.createElement("span");
    charSpan6.innerText = char;
    quote_text6.appendChild(charSpan6);
  });

  // roll over to the first quote
  if (quoteNo6 < quotes_array6.length - 6) {
    quoteNo6++;
  } else {
    quoteNo6 = 0;
  }
}
function processCurrentText6() {
  console.log("yes");
  // get current input text and split it
  curr_input6 = input_area6.value;
  curr_input6_array = curr_input6.split("");

  // increment total characters typed
  characterTyped6++;
  console.log(characterTyped6);

  errors6 = 0;

  quoteSpanArray6 = quote_text6.querySelectorAll("span");
  quoteSpanArray6.forEach((char, index) => {
    let typedChar6 = curr_input6_array[index];

    // characters not currently typed
    if (typedChar6 == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (typedChar6 === char.innerText) {
      console.log("y");
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
      console.log("n");
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors6++;
    }
  });

  err_text6.textContent = total_errors6 + errors6;
  let correctCharacters6 = characterTyped6 - (total_errors6 + errors6);
  console.log(correctCharacters6);
  let accuracy6Val = (correctCharacters6 / characterTyped6) * 100;
  acc_text6.textContent = Math.round(accuracy6Val);
  if (curr_input6.length == current_quote6.length) {
    updateQuote6();
    total_errors6 += errors6;
    input_area6.value = "";
  }
}

function updateTimer6() {
  if (time_left6 > 0) {
    // decrease the current time left
    time_left6--;

    // increase the time elapsed
    time_elapsed6++;

    // update the timer6 text
    timer_text6.textContent = time_left6 + "s";
  } else {
    // finish the game
    finishGame6();
  }
}

function finishGame6() {
  // stop the timer6
  clearInterval(timer6);

  // disable the input area
  input_area6.disabled = true;
  quote_text6.textContent = "Click on restart to start a new game.";
  restart_btn6.style.display = "block";

  let wpm6 = Math.round((characterTyped6 / 5 / time_elapsed6) * 60);

  console.log(wpm6);
  wpm_text6.textContent = wpm6;

  wpm_grp6.style.display = "block";
}

function startGame6() {
  resetValues6();
  updateQuote6();
  clearInterval(timer6);
  timer6 = setInterval(updateTimer6, 1000);
}

function resetValues6() {
  time_left6 = TIME_LIMIT6;
  time_elapsed6 = 0;
  errors6 = 0;
  total_errors6 = 0;
  accuracy6 = 0;
  characterTyped6 = 0;
  quoteNo6 = 0;
  input_area6.disabled = false;

  input_area6.value = "";

  acc_text6.textContent = 100;
  timer_text6.textContent = time_left6 + "s";
  err_text6.textContent = 0;
  wpm_grp6.style.display = "none";
}
var logbtn = document.getElementById("logBtn");
logbtn.addEventListener("click", function () {
  window.location = "home.html";
});
