//code made by  madhuri starts from here

var lobtn = document.getElementById('logBtn')
logbtn.addEventListener('click',function(){
    window.location = "home.html"
})

function finishGame() { 
    // stop the timer 
    clearInterval(timer); 
    
    // disable the input area 
    input_box.disabled = true; 
    
    // show finishing text 
    quote_text.textContent = " Restart  a new game."; 
    
    // display restart button 
    restart_show.style.display = "block"; 
    
    // calculate  wpm 
    wpm = Math.round((((TypeChar / 5) / timeElapsed) * 60)); 
    
    // update wpm box
  
    wpm_box.textContent = wpm;     
    
    // display the  wpm  div box
     
    wpm_div.style.display = "block"; 
  } 




function updateTimer() { 
      // decreasing the current time 
    if (time_left > 0) { 
    
      time_left--; 
    
      // increasing the time consumed
      time_consumed++; 
    
      // updating the timer 
      timer_text.textContent = timeLeft + "s"; 
    } 
    else { 
      finishGame(); 
    } 
  }

function startGame() { 
  //calling functions here
    reset(); 
    updateQuote(); 
    clearInterval(timer); 
    timer = setInterval(updateTimer, 1000); 
  } 
    
  function reset() { 
      //making every values to its initial stage
    time_left = time_limit; 
    time_consumed = 0; 
    error = 0; 
    total_errors = 0; 
    accuracy = 0; 
    TypeChar = 0; 
    quote_count= 0; 
    input_box.disabled = false; 
    
    input_box.value = ""; 
    quote_text.textContent = 'Click on the area below to start the game.'; 
    accuracy_text.textContent = 100; 
    timer_text.textContent = timeLeft + 's'; 
    error_text.textContent = 0; 
    restart_show.style.display = "none"; 
    wpm_box.style.display = "none"; 
  } 