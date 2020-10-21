import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const Questions = ({ title, info }) => {
  const [isAnswered, setIsAnswered] = useState(
    false
  );
  return (
    <div className='item'>
      <div className='question'>
        <h2>{title}</h2>
        <button
          className='btn'
          onClick={() => {
            setIsAnswered(!isAnswered);
          }}
        >
          {isAnswered ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus />
          )}
        </button>
      </div>
      <p>{isAnswered && info}</p>
    </div>
  );
};
export default Questions;
