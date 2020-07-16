let quotes_array3 = [
  "“I know that sentence is long and has too many joining words in it but sometimes, when I'm angry, words burst out of me like a shout, or, if I'm sad, they spill out of me like tears, and if I'm happy my words are like a song. If that happens it's one of my rules not to change them because they're coming out of my heart and not my head, and that's the way they're meant to be.” ― Glenda Millard, A Small Free Kiss in the Dark",
  "“One word absent from a sentence, or misinterpreted incorrectly, can change the entire meaning of a sentence. One word can change the meaning of everything. Before you believe anything about God or anybody, ask yourself how well do you trust the transmitter, translator or interpreter. And if you have never met them, then how do you know if the knowledge you acquired is even right? One hundred and twenty-five years following every major event in history, all remaining witnesses will have died. How well do you trust the man who has stored his version of a story? And how can you put that much faith into someone you don't know?” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem",
  "“Shukhov gazed at the ceiling in silence. Now he didn't know whether he wanted freedom or not. At first he'd longed for it. Every night he'd counted the days of his stretch—how many had passed, how many were coming. And then he'd grown bored with counting. And then it became clear that men like him wouldn't ever be allowed to return home, that they'd be exiled.”― Alexander Solzhenitsyn, One Day In The Life Of Ivan Denisovich",
  "One day a hunter sets a net to catch birds and placed grains and rice over the net. After some time a flock of pigeons comes by and start eating grains and get caught in the net.After some time they started losing hope, then their leader asks them to fly together up in the sky. They did as they were told and carried the net away.The hunter runs after them but they flew away to their friend’s mouse hole. Then the mouse cuts the net and freed the pigeons.",
  "Once there were two friends who were crossing the jungle. After some time they saw a bear coming towards them.Then, one of the friends quickly climbed the nearby tree and the other one did not know how to climb the tree. So he lays down on the ground holding his breath.The bear reaches near him and sniffs him in the ear. After some time bear left the place, thinking the man is dead.Now the other friend climbs down and asked his friend, what did bear said to him in his ear? He replied,” to be safe from the fake friends.”",
  "Once there was a crow who wishes to be colorful and beautiful like other birds. He then went to the parrot and shared his thoughts.But parrot said peacock is most beautiful bird so talk to him. Then the crow went to the peacock and told him about his looks.Then the peacock replied,” You are the luckiest bird that has been never caged in life and we because of our beauty stay caged, and you are always free”.After listening to this, crow realized his mistake and thanked God for making him like this and he flew away happily. ",
  "Once there was a Lion in the jungle who used to kill 2-3 animals daily for his meal. All animals went to him to tell, that daily one of them will come to him for his meal.So, the Lion agreed and this started going for many days. One day, it was Rabbit’s turn. When he was on his way he saw a well.Now he plans to kill the lion and save himself. He went to the lion and told him that, there is another lion who claims to be more powerful than him.Then the lion asks the rabbit to take him to that lion. The rabbit takes him to the well and said he lives here. When the lion looked in the well he saw his own reflection and jumped in the well and dies.",
];
let TIME_LIMIT3 = 180;
let timer_text3 = document.querySelector(".currCal_time3");
let acc_text3 = document.querySelector(".currCal_accu3");
let err_text3 = document.querySelector(".currCal_error3");
let wpm_text3 = document.querySelector(".currCal_wpm3");
let quote_text3 = document.querySelector("#quote3");
let input_area3 = document.querySelector("#textArea3");
let restart_btn3 = document.querySelector("#restart_btn3");
let wpm_grp3 = document.querySelector(".wpm3");
let err_grp3 = document.querySelector(".errors3");
let acc_grp3 = document.querySelector(".accuracy3");
let start3 = document.getElementById("reset3");
let time_left3 = TIME_LIMIT3;
let time_elapsed3 = 0;
let total_errors3 = 0;
let errors3 = 0;
let accuracy3 = 0;
let characterTyped3 = 0;
let current_quote3 = "";
let quoteNo3 = 0;
let timer3 = null;
start3.addEventListener("click", startGame3);

function updateQuote3() {
  quote_text3.textContent = null;
  quoteNo3 = Math.floor(Math.random() * quotes_array3.length);
  current_quote3 = quotes_array3[quoteNo3];
  current_quote3.split("").forEach((char) => {
    const charSpan3 = document.createElement("span");
    charSpan3.innerText = char;
    quote_text3.appendChild(charSpan3);
  });

  // roll over to the first quote
  if (quoteNo3 < quotes_array3.length - 1) quoteNo3++;
  else quoteNo3 = 0;
}

function processCurrentText3() {
  // get current input text and split it
  curr_input3 = input_area3.value;
  curr_input3_array = curr_input3.split("");

  // increment total characters typed
  characterTyped3++;

  errors3 = 0;

  quoteSpanArray3 = quote_text3.querySelectorAll("span");
  quoteSpanArray3.forEach((char, index) => {
    let typedChar3 = curr_input3_array[index];

    // characters not currently typed
    if (typedChar3 == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (typedChar3 === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors3++;
    }
  });

  err_text3.textContent = total_errors3 + errors3;
  let correctCharacters3 = characterTyped3 - (total_errors3 + errors3);
  let accuracy3Val = (correctCharacters3 / characterTyped3) * 100;
  acc_text3.textContent = Math.round(accuracy3Val);
  if (curr_input3.length == current_quote3.length) {
    updateQuote3();
    total_errors3 += errors3;
    input_area3.value = "";
  }
}

function updateTimer3() {
  if (time_left3 > 0) {
    // decrease the current time left
    time_left3--;

    // increase the time elapsed
    time_elapsed3++;

    // update the timer3 text
    timer_text3.textContent = time_left3 + "s";
  } else {
    // finish the game
    finishGame3();
  }
}

function finishGame3() {
  // stop the timer3
  clearInterval(timer3);

  // disable the input area
  input_area3.disabled = true;

  // show finishing text
  quote_text3.textContent = "Click on restart to start a new game.";
  restart_btn.style.display = "block";

  let wpm = Math.round((characterTyped3 / 5 / time_elapsed3) * 60);
  console.log(wpm);
  wpm_text3.textContent = wpm;

  wpm_grp3.style.display = "block";
}

function startGame3() {
  resetValues3();
  updateQuote3();
  clearInterval(timer3);
  timer3 = setInterval(updateTimer3, 1000);
}

function resetValues3() {
  time_left3 = TIME_LIMIT3;
  time_elapsed3 = 0;
  errors3 = 0;
  total_errors3 = 0;
  accuracy3 = 0;
  characterTyped3 = 0;
  quoteNo3 = 0;
  input_area3.disabled = false;

  input_area3.value = "";

  acc_text3.textContent = 100;
  timer_text3.textContent = time_left3 + "s";
  err_text3.textContent = 0;
  wpm_grp3.style.display = "none";
}
