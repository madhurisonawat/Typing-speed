let quotes_array1 = [
  "“I liked that sentence then and I like that sentence now but then I had no way of making any sense of it, I could only keep it in my mind's eye, where it rested and grew in the embryo that would become my imagination”",
  "Oh, how the priest prayed! On his knees, hands clapsed, for the poor, the sick, the wounded, the frail, the ugly, the forgotten, the plain old unlucky. Oh, and for his favourite sports team — he musn’t forget them.",
  "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
  "The dog hadn’t been fed for days. He howled and barked and whined, until a steak suddenly appeared in the backyard. It was charred beyond belief, but to the dog, unlike the human next door, it was perfect.",
  "“A sentence is born into this world neither good nor bad, and that to establish its character is a question of the subtlest possible adjustments, a process of intuition to which exaggeration and force are fatal.”",
  "“There is someone out there who needs just a line or a sentence of your life testimony to believe he or she can also make it. Keeping your testimony away from them is more of suspending their accomplishments till further notice! Come on! Let's learn from you!”",
  " “If there is “better”, then there is a “best”. If there is “half”, then there is a “complete”. Far more than being a “better half”, you can be a “best complete”; like a word/phrase that beautifies and gives meaning to a sentence when it is added.”",
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
  "“I know that sentence is long and has too many joining words in it but sometimes, when I'm angry, words burst out of me like a shout, or, if I'm sad, they spill out of me like tears, and if I'm happy my words are like a song. If that happens it's one of my rules not to change them because they're coming out of my heart and not my head, and that's the way they're meant to be.” ― Glenda Millard, A Small Free Kiss in the Dark",
  "“One word absent from a sentence, or misinterpreted incorrectly, can change the entire meaning of a sentence. One word can change the meaning of everything. Before you believe anything about God or anybody, ask yourself how well do you trust the transmitter, translator or interpreter. And if you have never met them, then how do you know if the knowledge you acquired is even right? One hundred and twenty-five years following every major event in history, all remaining witnesses will have died. How well do you trust the man who has stored his version of a story? And how can you put that much faith into someone you don't know?” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem",
  "“Shukhov gazed at the ceiling in silence. Now he didn't know whether he wanted freedom or not. At first he'd longed for it. Every night he'd counted the days of his stretch—how many had passed, how many were coming. And then he'd grown bored with counting. And then it became clear that men like him wouldn't ever be allowed to return home, that they'd be exiled.”― Alexander Solzhenitsyn, One Day In The Life Of Ivan Denisovich",
  "One day a hunter sets a net to catch birds and placed grains and rice over the net. After some time a flock of pigeons comes by and start eating grains and get caught in the net.After some time they started losing hope, then their leader asks them to fly together up in the sky. They did as they were told and carried the net away.The hunter runs after them but they flew away to their friend’s mouse hole. Then the mouse cuts the net and freed the pigeons.",
  "Once there were two friends who were crossing the jungle. After some time they saw a bear coming towards them.Then, one of the friends quickly climbed the nearby tree and the other one did not know how to climb the tree. So he lays down on the ground holding his breath.The bear reaches near him and sniffs him in the ear. After some time bear left the place, thinking the man is dead.Now the other friend climbs down and asked his friend, what did bear said to him in his ear? He replied,” to be safe from the fake friends.”",
  "Once there was a crow who wishes to be colorful and beautiful like other birds. He then went to the parrot and shared his thoughts.But parrot said peacock is most beautiful bird so talk to him. Then the crow went to the peacock and told him about his looks.Then the peacock replied,” You are the luckiest bird that has been never caged in life and we because of our beauty stay caged, and you are always free”.After listening to this, crow realized his mistake and thanked God for making him like this and he flew away happily. ",
  "Once there was a Lion in the jungle who used to kill 2-3 animals daily for his meal. All animals went to him to tell, that daily one of them will come to him for his meal.So, the Lion agreed and this started going for many days. One day, it was Rabbit’s turn. When he was on his way he saw a well.Now he plans to kill the lion and save himself. He went to the lion and told him that, there is another lion who claims to be more powerful than him.Then the lion asks the rabbit to take him to that lion. The rabbit takes him to the well and said he lives here. When the lion looked in the well he saw his own reflection and jumped in the well and dies.",
];

let quote1 = document.getElementById("quote1");
let error_text1 = document.querySelector("currCal_error1");
let input_area1 = document.getElementById("textArea1");
let timer_next1 = document.getElementById("currCal_time1");
let accuracy_text1 = document.getElementById("currCal_accu1");
let wpm_text1 = document.getElementById("currCal_wpm1");
let accuracy_group = document.querySelectorAll(".accuracy1");
let input_char1 = 0;
let error1 = 0;
let total_errors1 = 0;
let current_quote1 = "";
let timer1 = null;
function startGame() {
  updateQuote();
}
function updateQuote() {
  const quoteNo1 = Math.floor(Math.random() * quotes_array1.length);
  console.log(quoteNo);
  current_quote1 = quotes_array1[quoteNo1];
  console.log(current_quote);
  current_quote1.split("").forEach((char) => {
    const charSpan1 = document.createElement("span");
    charSpan1.innerText = char;
    quote1.appendChild(charSpan);
  });
}
function checkInput() {
  let arr1 = [];
  let quote1_text = input_area1.value;
  arr = quote1_text.split("");
  input_char1++;
  error1 = 0;
  quoteSpanArray1 = quote1.querySelectorAll("span");
  quoteSpanArray1.forEach((char, index) => {
    let typedChar1 = arr1[index];
    console.log(typedChar);
    if (typedChar1 == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors1++;
    }
  });
  error_text1.textContent = total_errors + errors;
  let correctCharacters1 = characterTyped1 - (total_errors1 + errors1);
  let accuracyVal1 = (correctCharacters1 / characterTyped1) * 100;
  accuracy_text1.textContent = Math.round(accuracyVal1);
  if (quote1_text.length == current_quote1.length) {
    updateQuote();
    total_errors1 += errors1;
    input_area1.value = "";
  }
}

window.addEventListener("load", function () {
  let start1 = document.getElementById("reset1");
  start1.addEventListener("click", startGame);
});
