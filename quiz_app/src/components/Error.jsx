// import React from 'react'

// function Error() {
//   return (
//     <>
//     <div>
//         <span>something went wrong please try again later.</span>
//     </div>
//     </>
//   )
// }

// export default Error







import React from "react";

function Error() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full text-center border border-red-200">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          Please try again later. If the problem persists, contact support.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition duration-200 shadow-md"
        >
          🔄 Retry
        </button>
      </div>
    </section>
  );
}

export default Error;
