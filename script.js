

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizzes = [
  {
    id: 1,
    questions: [
      {question:
        "Which of the following is true about linked list implementation of stack?",
      options: [
        "In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.",
        "	In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.",
        "Both of the above",
        "None of the above",
      ],
      correct: "None of the above",},
      {question: "B+ Trees are considered BALANCED because",
      options: ["the lengths of the paths from the root to all leaf nodes are all equal.", "the lengths of the paths from the root to all leaf nodes differ from each other by at most 1", "the number of children of any two non-leaf sibling nodes differ by at most 1", "the number of records in any two leaf nodes differ by at most 1."],
      correct: "the lengths of the paths from the root to all leaf nodes are all equal.",},
      {question:
        "Which of the following option is not correct?",
      options: ["If the queue is implemented with a linked list, keeping track of a front pointer, Only rear pointer s will change during an insertion into an non-empty queue.", "Queue data structure can be used to implement least recently used (LRU) page fault algorithm and Quick short algorithm.", "Queue data structure can be used to implement Quick short algorithm but not least recently used (LRU) page fault algorithm.", "Both (A) and (C)"],
      correct: "Queue data structure can be used to implement Quick short algorithm but not least recently used (LRU) page fault algorithm.",},
      {question:
        "The postorder traversal of a binary tree is 8, 9, 6, 7, 4, 5, 2, 3, 1. The inorder traversal of the same tree is 8, 6, 9, 4, 7, 2, 5, 1, 3. The height of a tree is the length of the longest path from the root to any leaf. The height of the binary tree above is ________ .",
      options: ["2", "3", "4", "5"],
      correct: "4",},
      {question:
        "The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree (the height is the maximum distance of a leaf node from the root)?",
      options: ["2", "3", "4", "6"],
      correct: "3",},
      {question: "The five items: A, B, C, D, and E are pushed in a stack, one after other starting from A. The stack is popped four items and each element is inserted in a queue. The two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is",
        options: [
          "A",
          "B",
          "C",
          "D",
        ],
        correct: "D",},
      { question: "Consider a binary tree with n nodes, where each node can have at most two children. The height of the tree is defined as the maximum number of edges between the root node and any leaf node. Which of the following statements is true regarding the height h of this binary tree?",
        options: [
          "The height of the tree is always equal to n-1.",
          "The height of the tree can be greater than or equal to n-1.",
          "The height of the tree is always equal to log₂(n).",
          "The height of the tree can be greater than or equal to log₂(n).",
        ],
        correct: "The height of the tree can be greater than or equal to n-1.",},
      {question: "What are the disadvantages of arrays?",
      options: ["Index value of an array can be negative", " Elements are sequentially accessed", "Data structure like queue or stack cannot be implemented", "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size"],
      correct: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",},
      {question: " The prefix form of A-B/ (C * D ^ E) is?",
        options: [
          " -A/B*C^DE",
          "-A/BC*^DE",
          " -ABCD*^DE",
          "-/*^ACBDE",
        ],
        correct: "-A/B*C^DE",},
        {question:
          "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        options: ["Insertion Sort", "Quick Sort", "Heap Sort", "Merge Sort"],
        correct: "Merge Sort",},
      // Quiz 1 questions...
      
    ],
  },
  {
    id: 2,
    questions: [
      {question:
        "What is the size of float and double in java?",
      options: [
        "32 and 64",
        "32 and 32",
        "64 and 64",
        "64 and 32",
      ],
      correct: "32 and 64",},
      {question: "Automatic type conversion is possible in which of the possible cases?",
      options: ["Byte to Int", "Int to long", "Long to int", "Short to int"],
      correct: "Int to long",},
      {question:
        "Select the valid statement.",
      options: ["char[] ch = new char(5)", "char[] ch = new char[5]", "char[] ch = new char()", "char[] ch = new char[]"],
      correct: "char[] ch = new char[5]",},
      { question:
        "When an array is passed to a method, what does the method receive?",
      options: ["The reference of the array", "A copy of the array", "Length of the array", "Copy of first element"],
      correct: "The reference of the array",},
      { question:
        "Select the valid statement to declare and initialize an array.",
      options: ["int[] A = {}", "int[] A = {1, 2, 3}", "int[] A = (1, 2, 3)", "int[][] A = {1,2,3}"],
      correct: "int[] A = {1, 2, 3}",},
      {question: "Arrays in java are-",
      options: [
        "Object refrences",
        "Objects",
        "Primitive data type",
        "None",
      ],
      correct: "Objects",},
      { question: "When is the object created with new keyword?",
      options: [
        "At run time",
        "At compile time",
        "Depends on the code",
        "None",
      ],
      correct: "At run time",},
      { question: "Identify the correct restriction on static methods.\n 1.They must access only static data,\n 2.They can only call other static methods.\n 3.They cannot refer to this or super.",
      options: ["1 and 2", "2 and 3", "Only 3", "1,2 and 3"],
      correct: "1,2 and 3",},
      {question:" Identify the return type of a method that does not return any value.",
      options:["int", "void", "double", "none"],
      correct:"void"},
      {question:"Exception created by try block is caught in which block",
    options:["catch","throw","final","none"],
  correct:"catch"},
      
      // Quiz 2 questions...
      
    ],
  },
  {
    id: 3,
    questions:[
      {question:"Which of the following are some common RDBMS in use?",
    options:["Oracle","MySql","HeidiSql","All of the above"],
  correct:"All of the above"},

  {question:"What command is used to create a new table in SQL?",
options:["CREATE TABLE","BUILD TABLE","GENERATE TABLE","None of the above"],
correct:"CREATE TABLE"},

{question:"What does the following statement in SQL do? \n DROP TABLE student;",
options:["Deletes a table called student","Creates a table called student","Check if there is a table called student","None of the above"],
correct:"Deletes a table called student"},

{question:"Which of the following commands is used to delete all rows and free up space from a table?",
options:["TRUNCATE","DROP","DELETE","ALTER"],
correct:"TRUNCATE"},

{question:" Which of the following commands are a part of Data Control Language?",
options:["Revoke","Grant","Both A and B","None of the above"],
correct:"Both A and B"},

{question:"Which of the following is the full form of DDL?",
options:["Data definition language","Data derivation language","Dynamic data language","Detailed data language"],
correct:"Data definition language"},

{question:"Which SQL constraint do we use to set some value to a field whose value has not been added explicitly?",
options:["UNIQUE","NOT NULL","DEFAULT","CHECK"],
correct:"DEFAULT"},

{question:"What are rows of a relation known as?",
options:["Degree","Entity","Tuple","None"],
correct:"Tuple"},

{question:"Which of the following allows you to uniquely identify a tuple?",
options:["Schema","Attribute","Super Key","Domain"],
correct:"Super Key"},

{question:"Which of the following is not a SQL command?",
options:["DELETE","ORDER BY","SELECT","WHERE"],
correct:"DELETE"},

    ]
  },

  //quiz 3 questions...
  { id:4,
    questions:[
      {question:"Out of all the 2-digit integers between 1 and 100, a 2-digit number has to be selected at random. What is the probability that the selected number is not divisible by 7?",
    options:["13/90","12/90","78/90","77/90"],
  correct:"77/90"},

  {question:"A deck of 5 cards (each carrying a distinct number from 1 to 5) is shuffled thoroughly. Two cards are then removed one at time from the deck. What is the probability that the two cards are selected with the number on the first card being one higher than the number on the second card?",
options:["1/5","4/25","1/4","2/5"],
correct:"1/5"},

{question:"A is 5 years older than B who is thrice as old as C. If the total of ages of A, B and C is 40, then how old is C ?",
options:["6","7","5","8"],
correct:"5"},

{question:"If the sum of two numbers is 13 and the sum of their square is 85. Find the numbers?",
options:["6 & 7","	5 & 8","	4 & 9","3 & 10"],
correct:"6 & 7"},

{question:"A two-digit number is such that the product of the digits is 12. When 9 is subtracted from the number, the digits are reversed. The number is:",
options:["34","62","43","26"],
correct:"43"},

{question:"The product of two numbers is 108 and the sum of their squares is 225. The difference of the number is:",
options:["5","4","3","None of these"],
correct:"3"},

{question:"Gaurav is having 5000 chocolates and he decides to distribute these among his 23 friends. To make sure that every friend gets equal number of chocolates, he decides to eat x number of chocolates. What can be the minimum value of x?",
options:["10","2","7","9"],
correct:"9"},

{question:"What should be the next number in below series? 3, 8, 15, 24, 35……..",
options:["44","47","48","49"],
correct:"48"},

{question:"What should be the value of x in equation (x / √216) = (√96 / x)",
options:["12","13","9","11"],
correct:"12"},

{question:"If the average of four consecutive odd numbers is 16, find the smallest of these numbers?",
options:["5","17","13","11"],
correct:"13"},

    ]
  }
  //quiz 4 questions...
  
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizzes[currentQuiz].questions.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizzes[currentQuiz].questions.length + " Question";

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });

  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizzes[currentQuiz].questions.sort(() => Math.random() - 0.5);

  for (let i of quizzes[currentQuiz].questions) {
    i.options.sort(() => Math.random() - 0.5);

    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizzes[currentQuiz].questions.length + " Question";

    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizzes[currentQuiz].questions[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizzes[currentQuiz].questions[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);

  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}


function initializeQuiz(quizId) {
  currentQuiz = quizId - 1; 
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
}


let startButton1 = document.getElementById("start-button-1");
startButton1.addEventListener("click", () => {
  initializeQuiz(1);
});


let startButton2 = document.getElementById("start-button-2");
startButton2.addEventListener("click", () => {
  initializeQuiz(2);
});


let startButton3 = document.getElementById("start-button-3");
startButton3.addEventListener("click", () => {
  initializeQuiz(3);
});


let startButton4 = document.getElementById("start-button-4");
startButton4.addEventListener("click", () => {
  initializeQuiz(4);
});


window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
