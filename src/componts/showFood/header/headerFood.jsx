import React, { useContext } from 'react';
import { Element } from '../../../App';

const headerFood = () => {
  const { id, filter, bio, title } = useContext(Element);
  return (
    <header className='flex justify-between items-center flex-col lg:flex-row gap-4'>
      <div className='text-center w-70 md:text-center lg:text-start'>
        <h1 className='titel  font-bold text-2xl'>{title}</h1>
        <p className='bio text-gray-600 mt-2 wra'>{bio}</p>
      </div>
      <div className='btns flex  justify-evenly items-center gap-2'>
        {filter.map((btn, index) => {
          return (
            <button
              key={index}
              id={id}
              type='button'
              className={`
                ${
                  (index === 0 && ` bg-accent rounded-full text-white `) ||
                  `hover:text-accent hover:scale-110 text-black transition-all `
                }
                  w-fit py-1.5 px-4 text-lg  whitespace-pjre   `}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default headerFood;
