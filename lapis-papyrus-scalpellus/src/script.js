let objects = ['lapis', 'papyrus', 'scalpellus'];

document.querySelector('#lapis').addEventListener('click', function(e) {
  let playersChoice = 'lapis';
  compareChoices(playersChoice);
});
document.querySelector('#papyrus').addEventListener('click', function(e) {
  let playersChoice = 'papyrus';
  compareChoices(playersChoice);
});
document.querySelector('#scalpellus').addEventListener('click', function(e) {
  let playersChoice = 'scalpellus';
  compareChoices(playersChoice);
});




function computerChooses() { 
  let randomIndex = Math.floor(Math.random() * objects.length);
  return objects[randomIndex];
}


function compareChoices(playersChoice) {
  let computersChoice = computerChooses();
  let resultStatement = "Computer chose " + computersChoice + " and player chose " + playersChoice + ".";
  let win = "Player won! ";
  let lose = "Player lost! ";
  if(playersChoice === computersChoice) {
    displayResults("It's a tie! " + resultStatement)
  } else if (playersChoice === objects[0]) {
    if (computersChoice === objects[2]) {
      displayResults(win + resultStatement)
    } else { 
    displayResults(lose + resultStatement)
    }
  } else if (playersChoice === objects[1]) {
    if (computersChoice === objects[0]) {
      displayResults(win + resultStatement)
    } else {
      displayResults(lose + resultStatement)
    }
  } else if (playersChoice === objects[2]) {
    if (computersChoice === objects[1]) {
      displayResults(win + resultStatement)
    } else {
      displayResults(lose + resultStatement)
    }
  }
}

function displayResults(result) {
  document.querySelector('#result').innerText = result;
}


