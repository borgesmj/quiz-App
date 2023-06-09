const quizData = [
    {
        question: "¿Cuantas franjas tiene la bandera de USA?",
        a: "11",
        b: "10",
        c: "13",
        d: "14",
        correct: "c"
    },
    {
        question: "¿Cual es el pais mas pequeño del mundo?",
        a: "Hawai",
        b: "El Vaticano",
        c: "España",
        d: "Venecia",
        correct: "b"
    },
    {
        question: "¿Cuantas zonas horarias hay en Rusia?",
        a: "10",
        b: "14",
        c: "11",
        d: "13",
        correct: "c"
    },
    {
        question: "¿Cual es el animal nacional de Australia?",
        a: "kiwi",
        b: "Perro",
        c: "Cocodrilo",
        d: "Canguro",
        correct: "d"
    },
    {
        question: "¿Cual es la capital de Canadá?",
        a: "Toronto",
        b: "Ottawa",
        c: "Montreal",
        d: "Calgary",
        correct: "b"
    },
    {
        question: "¿Cuando se inauguró el metro de Londres?",
        a: "1965",
        b: "1863",
        c: "1856",
        d: "1914",
        correct: "b"
    },
    {
        question: "¿De que ciudad son originarios Los Beatles?",
        a: "Liverpool",
        b: "Manchester",
        c: "Cambridge",
        d: "Oxford",
        correct: "b"
    },
    {
        question: "¿Cual es el idioma que mas palabras tiene?",
        a: "Español",
        b: "Filandes",
        c: "Ingles",
        d: "Frances",
        correct: "c"
    },
    {
        question: "¿Cual fué la primera pelicula de Disney?",
        a: "Hércules",
        b: "Mickey Mouse",
        c: "La Bella Durmiente",
        d: "Blanca Nieves",
        correct: "d"
    },
    {
        question: "¿Qué equipo de fútbol se le conoce como ‘The Red Devils’?",
        a: "Paris Saint Germain",
        b: "Manchester United",
        c: "Real Madrid",
        d: "Juventus",
        correct: "b"
    }
]

const quiz = document.getElementById("quiz-screen")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submitBtn')

// currentQuiz busca el objeto dentro de la array quizdata
let questionCounter = 1
// score marca el puntaje de las respuestas correctas
let score = 0

let randomQuiz = 0


//esta funcion nos deselecciona la respuesta seleccionada en la pregunta anterior
    const deseleccionar = () => {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }


//esta funcion carga cada pregunta y respuesta de cada objeto del array quizData
    const loadQuiz = () =>{
        deseleccionar()
        randomQuiz = Math.floor((Math.random()*(quizData.length)))
        console.log(randomQuiz)
        // Math.floor(Math.random() * 10)
    //mostrar las preguntas y respuestas en la pantalla
        const currentQuizData = quizData[randomQuiz]
    
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }
loadQuiz()



//esta funcion toma de parametro la respuesta seleccionada que sera pasada a la funcion del boton submit
const seleccionado = () => {
    let answer
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

const loadPrice = () => {
if (score > 9){
    quiz.innerHTML = `
            <h2 class="quiz-header"> Eres Un genio. Respondiste ${score}/${questionCounter} preguntas correctamente</h2>
                <button onclick="location.reload()">Comenzar de nuevo</button>
            `
} else if (score > 5){
    quiz.innerHTML = `
            <h2 class="quiz-header">Puedes Mejorar. Respondiste ${score}/${questionCounter} preguntas correctamente</h2>
                <button onclick="location.reload()">Comenzar de nuevo</button>
            `
} else {
    quiz.innerHTML = `
            <h2 class="quiz-header">Necesitas estudiar. Respondiste ${score}/${questionCounter} preguntas correctamente</h2>
                <button onclick="location.reload()">Comenzar de nuevo</button>
            `
}
}


//luego del click en submit, evalua la repuesta correcta, 
//pasa a la siguiente pregunta y en caso tal que no haya, pone la ventana final

submitBtn.addEventListener('click', () => {
    const answer = seleccionado()

    if (answer){
        if (answer === quizData[randomQuiz].correct){
            score++
        }
        
        // array = quizData.indexOf(randomQuiz);
        quizData.splice(randomQuiz , 1);
        console.log(quizData)

        if (quizData.length  > 0){
            loadQuiz()
            questionCounter++
        } else {
            loadPrice()

        }

    }
})