import React from 'react'
import Options from './Options'

function Question({ quizQuestion}) {
  console.log(quizQuestion)
  return (
  <>
  <h2>{quizQuestion.question}</h2>
  <Options quizQuestion =  {quizQuestion}/>
  </>
  )
}

export default Question;