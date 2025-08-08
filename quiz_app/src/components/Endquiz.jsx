import React from 'react'

function Endquiz({points,totalPoints,highScore,dispatch}) {
  const percentage = (points/totalPoints)*100;
  let emoji,message;
  if(percentage === 100){
    emoji =" ";
    message = "Perfect score!"
  }
  else if(percentage<100 && percentage>=80){
    emoji = " ",
    message = 'great job'
  }
  else if(percentage<80 && percentage>=50){
    emoji = " ",
    message = 'Good Efforts'
  }
   else if(percentage<50 && percentage>0){
    emoji = " ",
    message = 'keep trying'
  }
  else if(percentage === 0){
    emoji = '',
    message = "No answers are correct"
  }
  return (
    <>
    <section>
        <h2>Thank you for completing the quiz</h2>
        <span>{emoji} - {message}</span>
        <p>You scored <strong>{points}</strong> out of {totalPoints} and your percentage is ({Math.round(percentage)})%</p>
        <p>(HighScore: {highScore})</p>
        <button onClick={()=>dispatch({type:"restart"})}>Restart quiz</button>
    </section>
    </>
  )
}

export default Endquiz;