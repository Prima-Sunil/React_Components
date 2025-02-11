
"use client"; 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { increment, decrement, incrementByAmount } from '@/redux/counterSlice';

export default function CounterUI() {
  
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl">Counter: {counter}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
      </div>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment by 5
      </button>
    </div>
  );
}
