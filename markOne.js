var readlineSync = require('readline-sync');

var userName = readlineSync.question("Please enter your name: ");
console.log("\nWelcome "+userName+" to Do you know me? Quiz");

questionOne = {
  question: "\nwhat is my name?  ",
  answer: "Aman"
}

 questionTwo = { 
  question:"\nwhere do i live?  ",
  answer: "patna"  
 }

 questionThree = { 
  question:"\nwhat is my favourite food?  ",
  answer: "biryani"  
 }
 questionFour = { 
  question:"\nwho is my favourite actor? ",
  answer: "srk"
 }
 questionFive = { 
  question:"\nwhich is my favourite harry potter character?  ",
  answer: "sirius black"  
 }
var ques = [questionOne , questionTwo , questionThree , questionFour , questionFive];

var score = 0;

function quiz(questions ,answers){
  var userAnswer = readlineSync.question(questions);
  if(userAnswer.toUpperCase() === answers.toUpperCase()){
    score = score + 1;
    console.log("you are right");
    console.log(score);
  }
else 
{
  score = score - 1;
  console.log("you are wrong");
  console.log(score);
}

console.log("________________________")
}
for(let i = 0; i<ques.length; i++){
  quiz(ques[i].question,ques[i].answer);
}
console.log("total score" , score);

var highScore = [
  {
    name : "pappu",
     score : 4
  }, 
  {
    name : "pumba",
    score : 3
  },
  {
    name : "monu" ,
    score : 2
  }
]
console.log("\nhigh score :");
for(i=0; i<highScore.length; i++){
  console.log(highScore[i].name,highScore[i].score);
}