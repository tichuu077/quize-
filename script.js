document.addEventListener("DOMContentLoaded", function() {
  // Your code here

  let qutionindex = 0;
  let answerindex = 0;
  let isgameover = false;
  let score = 0;
  let gameStart = false;
  const quetions = [
    {
      quetion: "who is a prime minister of india",
      correct: "narendr modi",
      check: true
    },
    {
      quetion: "what is the capital of india",
      correct: "delhi",
      check: true
    },
    {
      quetion: "who is the national animal of india",
      correct: "tiger",
      check: true
    },
    {
      quetion: "what is name of largest state of india",
      correct: "rajasthan",
      check: true
    },
    {
      quetion: "what is the national language of india",
      correct: "hindi",
      check: true
    },
    {
      quetion: "who is a  currency of india",
      correct: "rupaya",
      check: true
    }
  ];
  const answer = [
    {
      first: "rahul gandhi",
      second: "narendr modi",
      third: "kejriwal",
      forth: "akash tikhat"
    },
    {
      first: "mumbai",
      second: "hydrabad",
      third: "delhi",
      forth: "surat"
    },
    {
      first: "dog",
      second: "panda",
      third: "lion",
      forth: "tiger"
    },
    {
      first: "rajasthan",
      second: "nagpur",
      third: "maharashtra",
      forth: "gujrat"
    },
    {
      first: "marathi",
      second: "telgu",
      third: "english",
      forth: "hindi"
    },
    {
      first: "doller",
      second: "cent",
      third: "rupaya",
      forth: "paisa"
    }
  ];

  function getQuetion() {
    let qutionbox = document.querySelector("h2");
    qutionbox.innerHTML = quetions[qutionindex].quetion;
    qutionindex++;
    if (qutionindex == quetions.length) {
      isgameover = true;
     quetions.forEach(e=>{
       e.check=true;
     })
      }
    }
  

  function getAnswers() {
    let answersbox = document.querySelector(".answers");
    answersbox.innerHTML = ""; // Clear existing buttons
    let buttons = [];
    for (let i = 0; i < 4; i++) {
      let button = document.createElement("button");
      button.classList.add("btn");
      answersbox.appendChild(button);
      buttons.push(button);
    }

    let currentAnswers = Object.values(answer[answerindex]);
    for (let i = 0; i < currentAnswers.length; i++) {
      buttons[i].innerHTML = currentAnswers[i];
    }
    answerindex++;
  }


  let start = document.querySelector(".next");
  start.addEventListener('click', e => {
    if (isgameover === true && gameStart === true) {
      let qutionbox = document.querySelector("h2");
      qutionbox.innerHTML = "Game over"
      let scoreDisplay = document.querySelector(".answers");
      scoreDisplay.classList.add("display");
      scoreDisplay.innerHTML = "";
      let cont = document.createElement("div");
      cont.innerHTML = "Your Score";
      cont.classList.add("score");
      scoreDisplay.appendChild(cont);
      let cont1 = document.createElement("div");
      cont1.innerHTML = `${score}`;
      scoreDisplay.appendChild(cont1);
      cont1.classList.add("score");
      let cont2 = document.createElement("div");
      cont2.innerHTML = "Please Restart";
      cont2.classList.add("score");
      scoreDisplay.appendChild(cont2);
      start.innerHTML = "Restart"
      qutionindex = 0;
      answerindex = 0;
      isgameover = false;
      score = 0;
      gameStart = false;
    }
    else if (gameStart === false && isgameover === false) {
      start.innerHTML = "Next";
      getQuetion();
      let answersbox = document.querySelector(".answers");
      answersbox.classList.remove("display");
      getAnswers();
      gameStart = true;
    }
    else {
      start.innerHTML = "Next"
      getQuetion();
      getAnswers();
    }
  })

  let answersContainer = document.querySelector(".answers");
  answersContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
      let clickedButton = event.target;
      // Your logic for handling button clicks goes here
      if(quetions[qutionindex-1].check){
      if (clickedButton.innerHTML == quetions[qutionindex - 1].correct) {
        score++;
          quetions[qutionindex-1].check=false;
        clickedButton.style.backgroundColor = "green";
      } else {
        clickedButton.style.backgroundColor = "red";
        Array.from(answersContainer.querySelectorAll(".btn")).forEach((btn) => {

          if (btn.innerHTML === quetions[qutionindex - 1].correct) {
            btn.style.backgroundColor = "green";
             quetions[qutionindex-1].check=false;
          }
        });
      }
      }
    }
  });
});
