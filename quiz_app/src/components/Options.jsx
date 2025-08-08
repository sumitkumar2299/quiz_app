import React from 'react'

function Options({quizQuestion}) {
  return (
    <>
    {quizQuestion.options.map((option)=>(
      <button key={option}>{option}</button>
    

    ))}
 
    </>
  )
}

export default Options