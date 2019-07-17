// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

function setup() {
  createCanvas(300,200),
  background(51);
  loadJSON('all', gotData);
  console.log('running');

  var button = select('#submit');
  button.mousePressed(submitWord);

}

function submitWord() {
  var word = select('#word').value();
  var score = select('#score').value();
  console.log(word,score);

  loadJSON('add/'+ word + "/" + score, finished);

}

function finished(data){
  console.log(data);
}




function gotData(data) {
  console.log(data);
  var keys = Object.keys(data);
  console.log(keys);
  for(var i=0; i< keys.length; i++){
    var word = keys[i];
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(255);
    textSize(16);
    text(word, x,y)
  }
  // // Get all the keys
  // var words = data.keys;

  // // Make a div for every word
  // for (var i = 0; i < words.length; i++) {
  //   var word = words[i];
  //   var count = data.dict[word];
  //   divMaker(word, count, i);  
  // }
}

// // Div-making closure, need this to use setTimeout
// function divMaker(word, count, index) {
//   setTimeout(makeDiv, index*10);

//   function makeDiv() {
//     var span = createSpan(word + ": " + count + " ");
//     span.class('count');
//     span.parent('results');
//   }
// }
