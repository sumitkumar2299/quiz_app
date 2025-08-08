import React from 'react'
import Options from './Options'

function Question({ quizQuestion,dispatch,answer}) {
  console.log(quizQuestion)
  return (
  <>
  <h2>{quizQuestion.question}</h2>
  <Options quizQuestion =  {quizQuestion} dispatch = {dispatch} answer = {answer}/>
  </>
  )
}

export default Question;