// import React from 'react'

// function NextButton({dispatch,answer,index,numberOfQuestion }) {
//   if(answer === null) return null;
//   if(index<numberOfQuestion-1)

//   return (
//     <>
//     <div>
//         <button onClick={()=>dispatch({type:"NextQuestion"})}>Next</button>
       
//     </div>
//     </>
//   )
//   if(index===numberOfQuestion-1)
//     return(
//   <div>
//      <button onClick={()=>dispatch({type:"finish"})}>Finish</button>
//   </div>
  
 
//   )
// }

// export default NextButton












import React from 'react';

function NextButton({ dispatch, answer, index, numberOfQuestion }) {
  // Return null if no answer has been selected yet
  if (answer === null) return null;

  // Render the "Next" button for all questions except the last one
  if (index < numberOfQuestion - 1) {
    return (
      <div>
        <button 
          onClick={() => dispatch({ type: "NextQuestion" })}
          className="mt-6 px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 "
        >
          Next
        </button>
      </div>
    );
  }

  // Render the "Finish" button on the very last question
  if (index === numberOfQuestion - 1) {
    return (
      <div>
        <button 
          onClick={() => dispatch({ type: "finish" })}
          className="mt-6 px-8 py-3 text-lg font-semibold bg-amber-500 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300"
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;
