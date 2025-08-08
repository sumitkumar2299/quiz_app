// import React from 'react'

// function Options({quizQuestion,dispatch,answer}) {
//   return (
//     <>
//     {quizQuestion.options.map((option,index)=>(
//       <button className= {`option ${index === quizQuestion.correctAnswer?"correct":'wrong'}`}key={option} onClick={()=>dispatch({type:'newAnswer',payload:index})} >{option}</button>
    

//     ))}
 
//     </>
//   )
// }

// export default Options











import React from 'react';

function Options({ quizQuestion, dispatch, answer }) {
  const hasAnswered = answer!==null;
  console.log(hasAnswered);
  return (
    <>
      {quizQuestion.options.map((option, index) => (
        <button
          className={`
            w-full py-4 px-6 mb-4 
            text-lg font-medium text-left 
            rounded-lg transition-all duration-300 ease-in-out
            ${
              hasAnswered?index === quizQuestion.correctAnswer
                ? 'bg-green-100 text-green-800 border-2 border-green-500' // Correct
                : 'bg-red-100 text-red-800 border-2 border-red-500' // Wrong
                :" "
            }
          `}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled = {hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;








// different background colors for right and wrong answer 
// updating points 
// updating question number and status bar 
// next button should be displayed 
