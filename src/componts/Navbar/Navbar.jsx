import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import CardCountBadge from './cardCountBadge/CardCountBadge';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav className='container hidden lg:block'>
        <div className='flex justify-between items-center pt-8'>
          <h1 className='text-4xl font-medium'>logo</h1>
          <div className='relative w-full max-w-[500px]'>
            <input
              className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full'
              type='text'
              name='search'
              id='search'
              placeholder='search product...'
            />
            <AiOutlineSearch
              className='absolute top-0 right-0 mt-4 mr-5 text-gray-500'
              size={22}
            />
          </div>
          <div className='flex gap-4'>
            <div className='icon__wrapper relative'>
              <AiOutlineUser className='' />
            </div>
            <div className='icon__wrapper relative'>
              <AiOutlineShoppingCart />
              <CardCountBadge size='w-[25px] h-[25px]' number={count} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
