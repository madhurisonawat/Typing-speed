let quotes_array1 = [
  "I liked that sentence then and I like that sentence now but then I had no way of making any sense of it, I could only keep it in my mind's eye, where it rested and grew in the embryo that would become my imagination",
  "Oh, how the priest prayed! On his knees, hands clapsed, for the poor, the sick, the wounded, the frail, the ugly, the forgotten, the plain old unlucky. Oh, and for his favourite sports team — he musn’t forget them.",
  "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
  "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
  "A sentence is born into this world neither good nor bad, and that to establish its character is a question of the subtlest possible adjustments, a process of intuition to which exaggeration and force are fatal.",
  "There is someone out there who needs just a line or a sentence of your life testimony to believe he or she can also make it. Keeping your testimony away from them is more of suspending their accomplishments till further notice! Come on! Let's learn from you!",
  " If there is “better”, then there is a “best”. If there is “half”, then there is a “complete”. Far more than being a “better half”, you can be a “best complete”; like a word/phrase that beautifies and gives meaning to a sentence when it is added.”",
];

let time_limit1 = 60;
let timer_text1 = document.querySelector(".currCal_time1");
let accuracy_text1 = document.querySelector(".currCal_accu1");
let error_text1 = document.querySelector(".currCal_error1");
let wpm_text1 = document.querySelector(".currCal_wpm1");
let quote_text1 = document.querySelector("#quote1");
let input_box1 = document.querySelector("#textArea1");
let restart_btn = document.querySelector("#restart_btn1");
let wpm_box1= document.querySelector(".wpm1");
let error_box1= document.querySelector(".errors1");
let acc_box1 = document.querySelector(".accuracy1");
let start1 = document.getElementById("reset1");
let time_left1 = time_limit1;
let time_consumed1 = 0;
let total_errors1 = 0;
let errors1 = 0;
let accuracy1 = 0;
let TypeChar1 = 0;
let current_quote1 = "";
let quoteIndex1 = 0;
let timer1 = null;
start1.addEventListener("click", startGame);

function updateQuote() {
  quote_text1.textContent = null;
  quoteIndex1 = Math.floor(Math.random() * quotes_array1.length);
  current_quote1 = quotes_array1[quoteIndex1];
  current_quote1.split("").forEach((char) => {
    const charSpan1 = document.createElement("span");
    charSpan1.innerText = char;
    quote_text1.appendChild(charSpan1);
  });


  if (quoteIndex1 < quotes_array1.length - 1) {
    quoteIndex1++;
  } else {
    quoteIndex1 = 0;
  }
}
function inputCheck() {

  curr_input1 = input_box1.value;
  curr_input1_array = curr_input1.split("");

  TypeChar1++;

  errors1 = 0;

  quoteSpanArray1 = quote_text1.querySelectorAll("span");
  quoteSpanArray1.forEach((char, index) => {
    let charTyped1 = curr_input1_array[index];


    if (charTyped1 == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (charTyped1 === char.innerText) {

      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
     
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors1++;
    }
  });

  error_text1.textContent = total_errors1 + errors1;
  let corr_char1 = TypeChar1 - (total_errors1 + errors1);
  let accu_val1 = (corr_char1 / TypeChar1) * 100;
  accuracy_text1.textContent = Math.round(accu_val1);
  if (curr_input1.length == current_quote1.length) {
    updateQuote();
    total_errors1 += errors1;
    input_box1.value = "";
  }
}

function updateTimer() {
  if (time_left1 > 0) {
    
    time_left1--;


    time_consumed1++;


    timer_text1.textContent = time_left1 + "s";
  } else {
   
    finishGame();
  }
}

function finishGame() {

  clearInterval(timer1);


  input_box1.disabled = true;


  quote_text1.textContent = "Click on restart to start a new game.";
  restart_btn.style.display = "block";

  let wpm = Math.round((TypeChar1 / 5 / time_consumed1) * 60);
  console.log(wpm);

  wpm_text1.textContent = wpm;


  wpm_box1.style.display = "block";
}

function startGame() {
  resetValues();
  updateQuote();
  clearInterval(timer1);
  timer1 = setInterval(updateTimer, 1000);
}

function resetValues() {
  time_left1 = time_limit1;
  time_consumed1 = 0;
  errors1 = 0;
  total_errors1 = 0;
  accuracy1 = 0;
  TypeChar1 = 0;
  quoteIndex1 = 0;
  input_box1.disabled = false;

  input_box1.value = "";

  accuracy_text1.textContent = 100;
  timer_text1.textContent = time_left1 + "s";
  error_text1.textContent = 0;
  wpm_box1.style.display = "none";
}
var logbtn = document.getElementById("logBtn");
logbtn.addEventListener("click", function () {
  window.location = "home.html";
});


