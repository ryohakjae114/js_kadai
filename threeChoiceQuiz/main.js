let score = 0
const quizzes = [
  {
    question: '日本の首都はどこでしょう？',
    choices: ['大阪', '京都', '東京'],
    correctChoice: 2
  },
  {
    question: 'りんごはどの季節の果物でしょう？',
    choices: ['冬', '夏', '秋'],
    correctChoice: 2
  },
  {
    question: '太陽系の中で一番大きな惑星はどれでしょう？',
    choices: ['地球', '木星', '火星'],
    correctChoice: 1
  },
  {
    question: '「ももたろう」に登場する動物はどれでしょう？',
    choices: ['犬', 'ライオン', '熊'],
    correctChoice: 0
  },
  {
    question: '鳥の中で一番速く飛ぶことができるのはどれでしょう？',
    choices: ['ペンギン', 'つばめ', 'ダチョウ'],
    correctChoice: 1
  }
]

const main = document.getElementById('main')

const scoreElement = document.createElement('div')
scoreElement.innerText = `スコア:${score}`
scoreElement.id = 'score'
main.appendChild(scoreElement)
const scoreDisplay = document.getElementById('score')

quizzes.forEach((quiz, quizIndex) => {
  const questionElement = document.createElement('div')
  questionElement.innerText = quiz.question
  main.appendChild(questionElement)

  quiz.choices.forEach((choice, choiceIndex) => {
    const questionElement = document.createElement('div')
    questionElement.innerText = `${choiceIndex}.${choice}`
    main.appendChild(questionElement)

    const choiceButtonElement = document.createElement('button')
    choiceButtonElement.innerText = '選択'
    choiceButtonElement.setAttribute('quizNumber', quizIndex)
    choiceButtonElement.setAttribute('choiceNumber', choiceIndex)
    choiceButtonElement.onclick = () => answer(quizIndex, choiceIndex)
    main.appendChild(choiceButtonElement)
  })
})

function answer(questionNumber, answer) {
  const choices = document.querySelectorAll(`[quizNumber="${questionNumber}"]`)
  const chosen = document.querySelector(
    `[quizNumber="${questionNumber}"][choiceNumber="${answer}"]`
  )
  const resultElement = document.createElement('div')
  resultElement.style.display = 'inline'
  choices.forEach((choice) => {
    choice.disabled = true
  })
  if (quizzes[questionNumber].correctChoice === answer) {
    score++
    scoreDisplay.innerText = `スコア:${score}`
    resultElement.innerText = '○'
  } else {
    resultElement.innerText = '✖︎'
  }
  chosen.after(resultElement)
}
