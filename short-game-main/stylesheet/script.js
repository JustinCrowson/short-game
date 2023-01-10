const quizData = [
{

    question: "Whitch language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
    
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUV Sailboats",
    correct: "b",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "None",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1905",
    b: "2000",
    c: "1990",
    d: "1995",
    correct: "d",
},
];

const quiz=document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 10

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuizData].correct) {

        }
        currentQuizData++

        if(currentQuizData < quizData.length) {
            FontFaceSetLoadEvent()
        } else {
            quiz.innerHTML = 
          
        }
    }
})
