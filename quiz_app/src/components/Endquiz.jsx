// import React from 'react'

// function Endquiz({points,totalPoints,highScore,dispatch}) {
//   const percentage = (points/totalPoints)*100;
//   let emoji,message;
//   if(percentage === 100){
//     emoji =" ";
//     message = "Perfect score!"
//   }
//   else if(percentage<100 && percentage>=80){
//     emoji = " ",
//     message = 'great job'
//   }
//   else if(percentage<80 && percentage>=50){
//     emoji = " ",
//     message = 'Good Efforts'
//   }
//    else if(percentage<50 && percentage>0){
//     emoji = " ",
//     message = 'keep trying'
//   }
//   else if(percentage === 0){
//     emoji = '',
//     message = "No answers are correct"
//   }
//   return (
//     <>
//     <section>
//         <h2>Thank you for completing the quiz</h2>
//         <span>{emoji} - {message}</span>
//         <p>You scored <strong>{points}</strong> out of {totalPoints} and your percentage is ({Math.round(percentage)})%</p>
//         <p>(HighScore: {highScore})</p>
//         <button onClick={()=>dispatch({type:"restart"})}>Restart quiz</button>
//     </section>
//     </>
//   )
// }

// export default Endquiz;

















import React from "react";

function Endquiz({ points, totalPoints, highScore, dispatch }) {
  const percentage = (points / totalPoints) * 100;

  let emoji, message, color;
  if (percentage === 100) {
    emoji = "🏆";
    message = "Perfect score!";
    color = "text-green-600";
  } else if (percentage >= 80) {
    emoji = "🎯";
    message = "Great job!";
    color = "text-green-500";
  } else if (percentage >= 50) {
    emoji = "👍";
    message = "Good Effort!";
    color = "text-yellow-500";
  } else if (percentage > 0) {
    emoji = "💪";
    message = "Keep trying!";
    color = "text-orange-500";
  } else {
    emoji = "😔";
    message = "No answers are correct";
    color = "text-red-500";
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Thank you for completing the quiz
        </h2>

        <div className={`text-5xl mb-2 ${color}`}>{emoji}</div>
        <p className={`text-lg font-medium mb-6 ${color}`}>{message}</p>

        <p className="text-gray-700 mb-2">
          You scored{" "}
          <span className="font-bold text-gray-900">{points}</span> out of{" "}
          <span className="font-bold text-gray-900">{totalPoints}</span>
        </p>
        <p className="text-gray-700 mb-2">
          Percentage:{" "}
          <span className="font-bold text-gray-900">
            {Math.round(percentage)}%
          </span>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          High Score: <span className="font-semibold">{highScore}</span>
        </p>

        <button
          onClick={() => dispatch({ type: "restart" })}
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition duration-200"
        >
          🔄 Restart Quiz
        </button>
      </div>
    </section>
  );
}

export default Endquiz;
