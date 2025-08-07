import React from 'react'
import Timer from './Timer'

function QuizMain() {
  return (
    <>
    <section>
        <div>
            <progress></progress>
        </div>

        <div>
            <span>Ques:2/10</span>
            <p>Points:<span>35/70</span></p>
            <Timer/>
        </div>
    </section>
    </>
  )
}

export default QuizMain