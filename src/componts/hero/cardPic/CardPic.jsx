import { BsArrowRight } from 'react-icons/bs';

const CardPic = ({ pic, textH1, textPar = '', price, spiecalSetting = {} }) => {
  return (
    <div className={` relative ${spiecalSetting.firstDiv}`}>
      <img
        className='w-[96%] h-full object-cover rounded-lg'
        src={pic}
        alt='hero image'
      />
      <div className='absolute max-w-[470px] ml-8 sm:ml-12 top-[50%] sm:space-y-2 -translate-y-1/2 '>
        {textPar && <p className='text-2xl hidden sm:block'>{textPar}</p>}
        <h2
          className={
            spiecalSetting.h2
              ? spiecalSetting.h2
              : 'text-2xl sm:text-3xl font-bold'
          }
        >
          {textH1}
        </h2>
        <p className='text-gray-500 text-xl pt-1 md '>Stating At</p>
        <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>
          ${price}
        </div>
        <button
          type='button'
          className='hover:bg-accentDark bg-accent text-white rounded-full w-fit flex items-center gap-4 px-3 py-2 text-[14px] sm:px-4 sm:py-2 cursor-pointer'
        >
          show more <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CardPic;
