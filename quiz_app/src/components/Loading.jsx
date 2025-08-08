// import React from 'react'

// function Loading() {
//   return (
//    <>
//    <div>
//     <p>loading question.....</p>
//    </div>
//    </>
//   )
// }

// export default Loading










import React from 'react';

function Loading() {
  return (
    // Main container to center the content on a dark, professional background
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6">
      {/* Loading message container with a subtle fade-in animation */}
      <div className="text-center animate-fadeIn">
        
        {/* Animated text to indicate loading */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide animate-pulse">
          Loading questions...
        </h1>

        {/* A simple, clean progress indicator below the text */}
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce delay-100"></div>
          <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce delay-200"></div>
          <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce delay-300"></div>
        </div>

      </div>
    </main>
  );
}

export default Loading;