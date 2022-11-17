// select the element by Id
const timeEl=document.querySelector("#timer")
const startBtn=document.querySelector("#start")
const questionBoxEl=document.querySelector("#question-box")
const choiceBtn1=document.queryselcetor("#choice1")
const choiceBtn2=document.queryselcetor("#choice2")
const choiceBtn3=document.queryselcetor("#choice3")
const choiceBtn4=document.queryselcetor("#choice4")

choiceBtn1.addEventListener("click",selection1)
choiceBtn2.addEventListener("click",selection2)
choiceBtn3.addEventListener("click",selection3)
choiceBtn4.addEventListener("click",selection4)

startBtn.addEventListener("click",startTimer)
let t=30;

const questions=[
  {
    question:"Inside which HTML element do we put the Javascript?",
    option1: "<javacript>",
    option2: "<script>",
    option3: "<scripting>",
    option4: "<js>",
    correct: 2
  }
  ,
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
    question: "Where is the correct place to insert a Javascript?",
    option1: "The <head> section",
    option2: "Both the <head> section and the <body> section are correct",
    option3: "The <body> section",
    option4: "The footer",
    correct:2
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

let questonNum=0;
let interval;
function startTimer(){
  clearInterval(interval);
  t=30;

  questionNum=Math.floor(Math.random()*questions.length);

  //manipulate the question box and options

  questionBoxEl.innerHTML= questions[questionNum].question
  choiceBtn1.innerHTML=questions[questionNum].option1
  choiceBtn2.innerHTML=questions[questionNum].option2
  choiceBtn3.innerHTML=questions[questionNum].option3
  choiceBtn4.innerHTML=questions[questonNum].option4

  interval=setInterval(()=>{

    t--;

    timeEl.innerHTML=t;
    if(t<1){
      alert("Time is up!")
      clearInterval(interval);
    }
    },1000)
    }

  function selection1(){
    if(questions[questionNum].correct==2){
      alert("correct")
    }else{
      alert("wrong")
      clearInterval(interval)
    }
  }
  function selection2(){
    if(questions[questionNum].correct==1){
    }else{
      alert("wrong")
      clearInterval(interval)
    }
  }
  function selection3(){
    if(questions[questionNum].correct==2){
     }else{
      alert("wrong")
      clearInterval(interval)
     }
    }
     function selection4(){
      if(questions[questionNum].correct==2){
       }else{
        alert("wrong")
        clearInterval(interval)
       }
      }
       function selection5(){
        if(questions[questionNum].correct==1){
         }else{
          alert("wrong")
          clearInterval(interval)
         }
        }
         function selection6(){
          if(questions[questionNum].correct==1){
           }else{
            alert("wrong")
            clearInterval(interval)
           }
          }
           function selection7(){
            if(questions[questionNum].correct==4){
             }else{
              alert("wrong")
              clearInterval(interval)
             }
            }
             function selection8(){
              if(questions[questionNum].correct==4){
               }else{
                alert("wrong")
                clearInterval(interval)
               }
               
              }