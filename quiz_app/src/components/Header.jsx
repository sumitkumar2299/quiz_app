// import React from 'react';

// function Header({numberOfQuestion,dispatch}) {
//  console.log(numberOfQuestion)
  
//   return (
//     <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6">
//       {/* Content Container */}
//       <div className="text-center max-w-2xl">
//         <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
//           Welcome to the Quiz
//         </h1>

//         <p className="mt-6 text-lg md:text-xl font-medium opacity-90">
//           <span>Total Questions:{numberOfQuestion}</span>
//         </p>

//         <button onClick={()=>dispatch({type:"start"})}
//           className="mt-10 px-10 py-4 text-lg font-semibold bg-white text-purple-600 rounded-2xl shadow-xl transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:ring-4 focus:ring-purple-300 active:scale-95"
//         >
//           Start Quiz
//         </button>
//       </div>
//     </main>
//   );
// }

// export default Header;



import React from "react";

function Header({ numberOfQuestion, dispatch }) {
  return (
    // Main container with a dark, subtle gradient background and a smooth transition
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 transition-all duration-500 ease-in-out">
      {/* Content container as a rounded card with a semi-transparent background */}
      <div className="text-center max-w-2xl bg-gray-800 bg-opacity-75 p-8 rounded-3xl shadow-2xl backdrop-blur-sm animate-fadeIn transition-all duration-300 hover:scale-105">
        
        {/* Title with a refined, bold style */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg text-white">
          Welcome to the Quiz 🎯
        </h1>

        {/* Question Info with a bright accent color */}
        <p className="mt-6 text-lg md:text-xl font-medium opacity-90">
          Total Questions:{" "}
          <span className="font-bold text-yellow-300">
            {numberOfQuestion}
          </span>
        </p>

        {/* Start Button with a clean, high-contrast design */}
        <button
          onClick={() => dispatch({ type: "start" })}
          className="mt-10 px-10 py-4 text-lg font-semibold bg-white text-gray-800 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:ring-4 focus:ring-yellow-300 active:scale-95"
        >
          🚀 Start Quiz
        </button>
      </div>
    </main>
  );
}

export default Header;
