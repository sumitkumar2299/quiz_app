import React from 'react';

function Header() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6">
      {/* Content Container */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Welcome to the Quiz
        </h1>

        <p className="mt-6 text-lg md:text-xl font-medium opacity-90">
          Total Questions: <span className="font-semibold">3</span>
        </p>

        <button
          className="mt-10 px-10 py-4 text-lg font-semibold bg-white text-purple-600 rounded-2xl shadow-xl transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:ring-4 focus:ring-purple-300 active:scale-95"
        >
          Start Quiz
        </button>
      </div>
    </main>
  );
}

export default Header;
