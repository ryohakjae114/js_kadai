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
  const questionSection = document.createElement('section')
  questionSection.id = `question${quizIndex}`
  const questionElement = document.createElement('div')
  questionElement.innerText = quiz.question
  questionSection.appendChild(questionElement)

  quiz.choices.forEach((choice, choiceIndex) => {
    const answerElement = document.createElement('button')
    answerElement.innerText = `${choiceIndex}.${choice}`
    questionSection.appendChild(answerElement)
    questionSection.onclick = () => answer(quizIndex, choiceIndex)
  })
  main.appendChild(questionSection)
})

function answer(quizIndex, choiceIndex) {
  const section = document.querySelector(`#question${quizIndex}`)
  const choiceButtons = section.querySelectorAll('button')
  const chosen = choiceButtons[choiceIndex]
  choiceButtons.forEach((choice) => {
    choice.disabled = true
  })
  const resultElement = document.createElement('div')
  resultElement.style.display = 'inline'

  if (quizzes[quizIndex].correctChoice === choiceIndex) {
    score++
    scoreDisplay.innerText = `スコア:${score}`
    resultElement.innerText = '○'
  } else {
    resultElement.innerText = '✖︎'
  }
  chosen.after(resultElement)
}
