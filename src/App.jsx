import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-6 p-8'>
      <h1 className='text-3xl font-bold'>Week 3 React + Tailwind</h1>
      <button
        className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'
        onClick={() => setCount(c => c + 1)}
      >
        Count: {count}
      </button>
      <p className='text-sm text-gray-500'>If you see styles, Tailwind is working ✅</p>
    </div>
  );
}
