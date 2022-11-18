// select the element by Id
const timeEl=document.querySelector("#timer")
const startBtn=document.querySelector("#start")
const questionBoxEl=document.querySelector("#question-box")
const questionNumberEl=document.querySelector("#questionNumber")

const choiceBtn1=document.querySelector("#choice1")
const choiceBtn2=document.querySelector("#choice2")
const choiceBtn3=document.querySelector("#choice3")
const choiceBtn4=document.querySelector("#choice4")

choiceBtn1.addEventListener("click",selection1)
choiceBtn2.addEventListener("click",selection2)
choiceBtn3.addEventListener("click",selection3)
choiceBtn4.addEventListener("click",selection4)

startBtn.addEventListener("click",startTimer)
let t=100;
let score=0;
let currentQuestion=0;

const questions=[
  {
    question:"What is the correct Javascript syntax to change the content of the HTML element below?",
    option1: "document.getElementByName('p').innerHTML= 'Hello World!';",
    option2: "document.getElementByName('p').innerHTML = 'Hello World!'';",
    option3: "#demo.innerHTML = 'Hello World!';",
    option4: "document.getElement('p').innerHTML = 'Hello World!';",
    correct: 1
  }
  ,
  {
    question: "How do you write 'Hello World' in an alert box?",
    option1:"msg('Hello World';",
    option2:"alert('Hello World');",
    option3: "alertBox('Hello World');",
    option4: "msgBox('Hello World');",
    correct: 2
  }
  ,
  {
    question: "How do you create a function in JavaScript?",
    option1: "function myFunction()",
    option2: "function:myFunction()",
    option3: "function = myFunction()",
    option4: "function +- myfunction()",
    correct: 1
  }
  ,
  {
    question:"How to write an IF statement in JavaScript?",
    option1: "if (i == 5)",
    option2: "if i == 5 then",
    option3: "if i = 5 then",
    option4: "if i = 5",
    correct: 1
  }
  ,
  {
    question:"How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    option1: "if i =! 5 then",
    option2: "if i <> 5",
    option3: "if (i <> 5)",
    option4: "if (i != 5) ",
    correct: 4
  }
  ,
  {
    question:"What is the correct way to write a JavaScript array?",
    option1: "var colors = 'red', 'green', 'blue'",
    option2: "var colors = (1:'red', 2:'green', 3:'blue')",
    option3: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    option4: "var colors = ['red', 'green', 'blue']",
    correct: 4
  }
]

  let interval;
  function startTimer(){
  clearInterval(interval);
  t=100;
  score=0;
  currentQuestion=0;

  //manipulate the question box and options

  interval=setInterval(()=>{


    t--;




    //check if we reach
    if(t<1 || currentQuestion>questions.length-1){
      alert(score)
      clearInterval(interval);
    }

    timeEl.innerHTML=t;
  questionBoxEl.innerHTML=questions[currentQuestion].question
  choiceBtn1.innerHTML=questions[currentQuestion].option1
  choiceBtn2.innerHTML=questions[currentQuestion].option2
  choiceBtn3.innerHTML=questions[currentQuestion].option3
  choiceBtn4.innerHTML=questions[currentQuestion].option4
  questionNumberEl.innerHTML=currentQuestion;

  },1000)
  }

function selection1(){//run when choosing choice1
      if(questions[currentQuestion].correct==1){
        score++;
      }else{
        t=t-10
      }


    currentQuestion++;
}
function selection2(){
if(questions[currentQuestion].correct==2){
  score++;
}else{


  t=t-10
}
currentQuestion++;
}

function selection3(){
  if(questions[currentQuestion].correct==3){
    score++;
  }else{


    t=t-10;
  }
}




function selection4(){
  if(questions[currentQuestion].correct==4){
    score++;
  }else{


    t=t-10;
  }
  currentQuestion++;
}