var readlineSync = require('readline-sync');

// Ex 14
questionOne = {
  question: "Who is the Fastest DC Character?",
  answer: "Flash"
}

 questionTwo = { 
  question:"Which superhero is scared of bats?",
  answer: "Batman"  
 }

 questionThree = { 
  question:"Batman protects which city?",
  answer: "Gotham"  
 }
 questionFour = { 
  question:"how many founder members are there in Justice League ",
  answer: "7"
 }
 questionFive = { 
  question:"Who is batman's arch-nemesis? ",
  answer: "Joker"   
 }
 questionSix = { 
   question:"Which superheroi was empowered with the gifts of ancient gods by the Wizard? ",
   answer: "Shazam"  
 }
questionSeven = { 
  question:"Hawkeye is the member of both Justice league and Avengers. - true or false?",
  answer: "true"  
 }
questionEight = {
 question:"The Joker is the member of sucide squad. true or false ? ",
 answer: "false" 
}
questionNine = {
  question:"Diana is the real name of which superhero? ",
  answer: "Wonder Women" 
 }
questionTen = { 
  question:"Kal-El is the real name of which DC superhero?",
  answer: "Superman"  
 }

var ques = [questionOne , questionTwo , questionThree , questionFour , questionFive , questionSix , questionSeven , questionEight , questionNine , questionTen];

var score = 0;

function quiz(question , answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("you are right");
    console.log(score);
  }
  else {
    score = score - 1;
    console.log(" you are wrong loser");
    console.log(score);
  }
  console.log("-----------------------");
}

for(let i = 0; i<ques.length; i++){
  quiz(ques[i].question,ques[i].answer); 
}
console.log("Total score" , score);

var highScore = [
  {
    name: "Aman",
    score: 10
  },
  {
    name: "Krishna",
    score: 4
  },
  {
    name: "Shahbaz",
    score: 6
  }
]

console.log("High Score: ");
for (let i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name, highScore[i].score);
}

// Ex 13
// questionOne = {
//   question: "Who is my favorite superhero?",
//    answer: "Dhruv"
//  }

// questionTwo = {
//   question: "Which is my favorite sad song?",
//   answer: "Channa Meraya"
  
// }
// questionThree = {
//   question: "favourite food?",
//   answer: "biryani"
// }
  
//   console.log(questionTwo.question);
//   console.log(questionOne.question);
//   console.log(questionThree.question);











//Ex 12
//creating object superHero
// var superMan = { 
//                 planet : 'krypton' , 
//                 status:'JL founder' , 
//                 superPower: 'stenghth',
//                 girlFriend: 'lois lane;'
// }
// var batMan = {
//                 planet : 'earth' , 
//                 status :'JL founder' , 
//                 superPower :'intelligence',
//                 girlFriend : 'racheal'
//               }
// console.log(batMan.planet);
// console.log(superMan.status);
// console.log(batMan.girlFriend);
// console.log(superMan.girlFriend);




//Ex 11

// var groceryItems =["soap" , "tissue", "papers" , "chips" ,"choclates" ];
// for(i=0; i<groceryItems.length; i++){
//    console.log(groceryItems[i]);
   
// }



// Ex 10
// var groceryItems =["soap" , "tissue", "papers" , "chips" ,"choclates" ];
// console.log(groceryItems[0]);
// console.log(groceryItems[2]);
// console.log(groceryItems[4]);




//Ex 9 Homework
// var n = 5;
// var string="";
// for (var i =1 ; i<= n ; i++) {
//   for(j= 0; j< i ;j++){
//     string=string+"*";
//   }
//   string=string+"\n";
// }
//   console.log(string);



//Ex 9
// var n = 5
// for(var i=1; i<=n ; i++){
//   console.log("my name is aman");
// }


//Ex 8
// var score = 0;
// function quiz(question , answer){
//   var userAnswer =       readlineSync.question(question);
//   if(userAnswer ===  answer){
//     score = score + 1;
//     console.log(score);
//     console.log("correct Answer");
//   }
//   else
//     {
//       console.log("wrong Answer");
//     }
// }
// quiz(" who is iron man ? " , "tony");




//Ex 7
// function add(a,b){
//   return (a + b );
// }console.log(add(2,6));

//Ex 6
// var score =0;
// var userAnswer = readlineSync.question(" where is your Hometown ? ");
// if(userAnswer === "Patna")
// {
//   console.log("right Answer");
//   score = score + 1;
//   console.log("score : " , score);
// }
//  else{
//    console.log("wrong Answer")
//  }

//Ex 5
// var userAge = readlineSync.question( " what is your age ");
// if(userAge > 25){
//   console.log("right");
// }
//  else {
//    console.log("wrong");
//  }

// Ex 4
// var userName = readlineSync.question( " what is your name ");
// console.log(" welcome " + userName);


// Ex 3
// var userName = readlineSync.question("what is your name ");
// console.log(" welcome  " +  userName  );


//Ex 2
// var userName = readlineSync.question("what is your name? ");
// console.log(userName);

//Ex 1
// console.log(" Aman kumar");