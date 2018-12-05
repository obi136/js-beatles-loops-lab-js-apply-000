// add solution here
function theBeatlesPlay (players, instruments){
  var beatPlay = [];
  for (var i = 0; i < players.length; i++){
    beatPlay.push(players[i] + "plays" + instruments[i]);
  }
  return beatPlay;
}

function johnLennonFacts(){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

  var factsLoop = [];
  var i = 0;
  while (i < facts.length){
    factsLoop.push(facts[i] + "!!!");
    i++
  }

  return factsLoop();

}

function iLoveTheBeatles(num){
  var who [];

  do {
    who.push("I Love The Beatles");
    num++
  } while (num < 15);

  return who;
}
