import React from 'react'
import Timer from './Timer'

function QuizMain({numberOfQuestion,index,points,totalPoints,answer}) {
  return (
    <>
    <section>
        <div>
            <progress>{index+Number(answer!=null)} max = {numberOfQuestion}</progress>
        </div>

        <div>
            <span>Ques:{index+1}/{numberOfQuestion}</span>
            <p>Points:{points}/{totalPoints}</p>
            <Timer/>
        </div>
    </section>
    </>
  )
}

export default QuizMain