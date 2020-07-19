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

let time_limit6 = 6;
let timer_text6 = document.querySelector(".currCal_time6");
let accuracy_text6= document.querySelector(".currCal_accu6");
let error_text6 = document.querySelector(".currCal_error6");
let wpm_text6 = document.querySelector(".currCal_wpm6");
let quote_text6 = document.querySelector("#quote6");
let input_box6 = document.querySelector("#textArea6");
let restart_btn6 = document.querySelector("#restart_btn6");
let wpm_box6 = document.querySelector(".wpm6");
let err_box6 = document.querySelector(".errors6");
let acc_box6 = document.querySelector(".accuracy6");
let start6 = document.getElementById("reset6");
let time_left6 = time_limit6;
let time_consumed6 = 0;
let total_errors6 = 0;
let errors6 = 0;
let accuracy6 = 0;
let TypeChar6 = 0;
let current_quote6 = "";
let quoteIndex6 = 0;
let timer6 = null;
start6.addEventListener("click", startGame6);

function updateQuote6() {
  quote_text6.textContent = null;
  quoteIndex6 = Math.floor(Math.random() * quotes_array6.length);
  current_quote6 = quotes_array6[quoteIndex6];
  current_quote6.split("").forEach((char) => {
    const charSpan6 = document.createElement("span");
    charSpan6.innerText = char;
    quote_text6.appendChild(charSpan6);
  });


  if (quoteIndex6 < quotes_array6.length - 6) {
    quoteIndex6++;
  } else {
    quoteIndex6 = 0;
  }
}
function inputCheck6() {

  curr_input6 = input_box6.value;
  curr_input6_array = curr_input6.split("");

  TypeChar6++;


  errors6 = 0;

  quoteSpanArray6 = quote_text6.querySelectorAll("span");
  quoteSpanArray6.forEach((char, index) => {
    let charTyped6 = curr_input6_array[index];

    if (charTyped6 == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (charTyped6 === char.innerText) {
    
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
  
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors6++;
    }
  });

  error_text6.textContent = total_errors6 + errors6;
  let corr_char6 = TypeChar6 - (total_errors6 + errors6);
  console.log(corr_char6);
  let acc_val6 = (corr_char6 / TypeChar6) * 100;
  accuracy_text6.textContent = Math.round(acc_val6);
  if (curr_input6.length == current_quote6.length) {
    updateQuote6();
    total_errors6 += errors6;
    input_box6.value = "";
  }
}

function updateTimer6() {
  if (time_left6 > 0) {

    time_left6--;


    time_consumed6++;


    timer_text6.textContent = time_left6 + "s";
  } else {

    finishGame6();
  }
}

function finishGame6() {

  clearInterval(timer6);

  input_box6.disabled = true;
  quote_text6.textContent = "Click on restart to start a new game.";
  restart_btn6.style.display = "block";

  let wpm6 = Math.round((TypeChar6 / 5 / time_consumed6) * 60);


  wpm_text6.textContent = wpm6;
 

  wpm_box6.style.display = "block";
}

function startGame6() {
  resetValues6();
  updateQuote6();
  clearInterval(timer6);
  timer6 = setInterval(updateTimer6, 1000);
}

function resetValues6() {
  time_left6 = time_limit6;
  time_consumed6 = 0;
  errors6 = 0;
  total_errors6 = 0;
  accuracy6 = 0;
  TypeChar6 = 0;
  quoteIndex6 = 0;
  input_box6.disabled = false;

  input_box6.value = "";

  accuracy_text6.textContent = 100;
  timer_text6.textContent = time_left6 + "s";
  error_text6.textContent = 0;
  wpm_box6.style.display = "none";
}
var logbtn = document.getElementById("logBtn");
logbtn.addEventListener("click", function () {
  window.location = "home.html";
});
