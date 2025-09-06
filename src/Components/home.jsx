import React, { useState } from "react";

export default function Card() {
  const [isLarge, setIsLarge] = useState(true);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div
        className={`rounded-2xl shadow-xl p-6 text-center transition-all duration-300 ${
          isLarge ? "w-[400px]" : "w-[250px]"
        } bg-[#faf4ed]`}
      >
        <img
          src='https://i.ibb.co.com/TxTvdxNt/488670191-3862163097384348-3298242418708695290-n.jpg'
          alt='Profile'
          className='w-40 h-40 mx-auto rounded-full border-6 border-orange-500'
        />
        <h1 className='text-3xl text-orange-500 text-center font-bold'>
          Tahseen Hossain
        </h1>
        <p className='mt-2 text-orange-400 text-center text-xl'>
          I am a recent Computer Science graduate working as a
          Full-StackDeveloper.
        </p>
        <button
          onClick={() => setIsLarge(!isLarge)}
          className='mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-400'
        >
          Toggle Size
        </button>
      </div>
    </div>
  );
}
