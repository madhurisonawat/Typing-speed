 
let quotes_array1 = [
    "I liked that sentence then and I like that sentence now but then I had no way of making any sense of it, I could only keep it in my mind's eye, where it rested and grew in the embryo that would become my imagination",
    "Oh, how the priest prayed! On his knees, hands clapsed, for the poor, the sick, the wounded, the frail, the ugly, the forgotten, the plain old unlucky. Oh, and for his favourite sports team — he musn’t forget them.",
    "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
    "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
    "A sentence is born into this world neither good nor bad, and that to establish its character is a question of the subtlest possible adjustments, a process of intuition to which exaggeration and force are fatal.",
    "There is someone out there who needs just a line or a sentence of your life testimony to believe he or she can also make it. Keeping your testimony away from them is more of suspending their accomplishments till further notice! Come on! Let's learn from you!",
    " If there is “better”, then there is a “best”. If there is “half”, then there is a “complete”. Far more than being a “better half”, you can be a “best complete”; like a word/phrase that beautifies and gives meaning to a sentence when it is added.”",
  ];
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
  let quotes_array3 = [
    "I know that sentence is long and has too many joining words in it but sometimes, when I'm angry, words burst out of me like a shout, or, if I'm sad, they spill out of me like tears, and if I'm happy my words are like a song. If that happens it's one of my rules not to change them because they're coming out of my heart and not my head, and that's the way they're meant to be.” ― Glenda Millard, A Small Free Kiss in the Dark",
    "One word absent from a sentence, or misinterpreted incorrectly, can change the entire meaning of a sentence. One word can change the meaning of everything. Before you believe anything about God or anybody, ask yourself how well do you trust the transmitter, translator or interpreter. And if you have never met them, then how do you know if the knowledge you acquired is even right? One hundred and twenty-five years following every major event in history, all remaining witnesses will have died. How well do you trust the man who has stored his version of a story? And how can you put that much faith into someone you don't know?” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem",
    "Shukhov gazed at the ceiling in silence. Now he didn't know whether he wanted freedom or not. At first he'd longed for it. Every night he'd counted the days of his stretch—how many had passed, how many were coming. And then he'd grown bored with counting. And then it became clear that men like him wouldn't ever be allowed to return home, that they'd be exiled.”― Alexander Solzhenitsyn, One Day In The Life Of Ivan Denisovich",
    "One day a hunter sets a net to catch birds and placed grains and rice over the net. After some time a flock of pigeons comes by and start eating grains and get caught in the net.After some time they started losing hope, then their leader asks them to fly together up in the sky. They did as they were told and carried the net away.The hunter runs after them but they flew away to their friend’s mouse hole. Then the mouse cuts the net and freed the pigeons.",
    "Once there were two friends who were crossing the jungle. After some time they saw a bear coming towards them.Then, one of the friends quickly climbed the nearby tree and the other one did not know how to climb the tree. So he lays down on the ground holding his breath.The bear reaches near him and sniffs him in the ear. After some time bear left the place, thinking the man is dead.Now the other friend climbs down and asked his friend, what did bear said to him in his ear? He replied,” to be safe from the fake friends.",
    "Once there was a crow who wishes to be colorful and beautiful like other birds. He then went to the parrot and shared his thoughts.But parrot said peacock is most beautiful bird so talk to him. Then the crow went to the peacock and told him about his looks.Then the peacock replied,” You are the luckiest bird that has been never caged in life and we because of our beauty stay caged, and you are always free”.After listening to this, crow realized his mistake and thanked God for making him like this and he flew away happily. ",
    "Once there was a Lion in the jungle who used to kill 2-3 animals daily for his meal. All animals went to him to tell, that daily one of them will come to him for his meal.So, the Lion agreed and this started going for many days. One day, it was Rabbit’s turn. When he was on his way he saw a well.Now he plans to kill the lion and save himself. He went to the lion and told him that, there is another lion who claims to be more powerful than him.Then the lion asks the rabbit to take him to that lion. The rabbit takes him to the well and said he lives here. When the lion looked in the well he saw his own reflection and jumped in the well and dies.",
  ];
  let TIME_LIMIT1 = 60;
  let timer_text1 = document.querySelector(".currCal_time1");
  let acc_text1 = document.querySelector(".currCal_accu1");
  let err_text1 = document.querySelector(".currCal_error1");
  let wpm_text1 = document.querySelector(".currCal_wpm1");
  let quote_text1 = document.querySelector("#quote1");
  let input_area1 = document.querySelector("#textArea1");
  let restart_btn = document.querySelector("#restart_btn");
  let wpm_grp1 = document.querySelector(".wpm1");
  let err_grp1 = document.querySelector(".errors1");
  let acc_grp1 = document.querySelector(".accuracy1");
  let start1 = document.getElementById("reset1");
  let time_left1 = TIME_LIMIT1;
  let time_elapsed1 = 0;
  let total_errors1 = 0;
  let errors1 = 0;
  let accuracy1 = 0;
  let characterTyped1 = 0;
  let current_quote1 = "";
  let quoteNo1 = 0;
  let timer1 = null;
  start1.addEventListener("click", startGame);
  
  function updateQuote() {
    quote_text1.textContent = null;
    quoteNo1 = Math.floor(Math.random() * quotes_array1.length);
    current_quote1 = quotes_array1[quoteNo1];
    current_quote1.split("").forEach((char) => {
      const charSpan1 = document.createElement("span");
      charSpan1.innerText = char;
      quote_text1.appendChild(charSpan1);
    });
  
    // roll over to the first quote
    if (quoteNo1 < quotes_array1.length - 1)
    { quoteNo1++;
    }
    else
    { quoteNo1 = 0;
  }
}
  function processCurrentText() {
      console.log("yes")
    // get current input text and split it
    curr_input1 = input_area1.value;
    curr_input1_array = curr_input1.split("");
  
    // increment total characters typed
    characterTyped1++;
  
    errors1 = 0;
  
    quoteSpanArray1 = quote_text1.querySelectorAll("span");
    quoteSpanArray1.forEach((char, index) => {
      let typedChar1 = curr_input1_array[index];
  
      // characters not currently typed
      if (typedChar1 == null) {
        char.classList.remove("correct_char");
        char.classList.remove("incorrect_char");
      } else if (typedChar1 === char.innerText) {
          console.log('y')
        char.classList.add("correct_char");
        char.classList.remove("incorrect_char");
      } else {
        console.log('n')
        char.classList.add("incorrect_char");
        char.classList.remove("correct_char");
        errors1++;
      }
    });
  
    err_text1.textContent = total_errors1 + errors1;
    let correctCharacters1 = characterTyped1 - (total_errors1 + errors1);
    let accuracy1Val = (correctCharacters1 / characterTyped1) * 100;
    acc_text1.textContent = Math.round(accuracy1Val);
    if (curr_input1.length == current_quote1.length) {
      updateQuote();
      total_errors1 += errors1;
      input_area1.value = "";
    }
  }
  
  function updateTimer() {
    if (time_left1 > 0) {
      // decrease the current time left
      time_left1--;
  
      // increase the time elapsed
      time_elapsed1++;
  
      // update the timer1 text
      timer_text1.textContent = time_left1 + "s";
    } else {
      // finish the game
      finishGame();
    }
  }
  
  function finishGame() {
    // stop the timer1
    clearInterval(timer1);
  
    // disable the input area
    input_area1.disabled = true;
  
    // show finishing text
    quote_text1.textContent = "Click on restart to start a new game.";
    restart_btn.style.display = "block";
  
    let wpm = Math.round((characterTyped1 / 5 / time_elapsed1) * 60);
    console.log(wpm);
    wpm_text1.textContent = wpm;
  
    wpm_grp1.style.display = "block";
  }
  
  function startGame() {
    resetValues();
    updateQuote();
    clearInterval(timer1);
    timer1 = setInterval(updateTimer, 1000);
  }
  
  function resetValues() {
    time_left1 = TIME_LIMIT1;
    time_elapsed1 = 0;
    errors1 = 0;
    total_errors1 = 0;
    accuracy1 = 0;
    characterTyped1 = 0;
    quoteNo1 = 0;
    input_area1.disabled = false;
  
    input_area1.value = "";
  
    acc_text1.textContent = 100;
    timer_text1.textContent = time_left1 + "s";
    err_text1.textContent = 0;
    wpm_grp1.style.display = "none";
  }
var logbtn = document.getElementById('logBtn')
logbtn.addEventListener('click',function(){
    window.location = "home.html"
})