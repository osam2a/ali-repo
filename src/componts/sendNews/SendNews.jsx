import { useState } from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
const SendNews = () => {
  const [value, setValue] = useState(``);
  return (
    <div className='container mt-9 p-2 pt-5 py-8  border-red-400 bg-accentDark flex flex-col md:flex-row justify-between items-center gap-4'>
      <div className='flex justify-between items-center gap-4'>
        <h1 className='font-bold text-white text-[70px] '>
          {<HiOutlineMailOpen />}
        </h1>
        <div>
          <h1 className='font-bold text-white text-2xl '>
            sign up To Our Newsletters
          </h1>
          <p className='font-medium text-gray-300  '>
            ...and receive $20 coupon for first shopping
          </p>
        </div>
      </div>

      <div className=' bg-white p-2 rounded-full w-full max-w-lg flex justify-between items-center gap-4'>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type='email'
          name='email'
          id='email'
          placeholder='Your Email Address...'
          className='text-lg w-full p-3 rounded-full outline-none'
        />
        <button
          type='button'
          className='bg-accentDark hover:bg-accent rounded-full text-white text-lg px-3 py-1 '
        >
          subscribe!
        </button>
      </div>
    </div>
  );
};

export default SendNews;
