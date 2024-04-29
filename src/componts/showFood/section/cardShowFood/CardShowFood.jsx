import { useContext } from 'react';
import { AiOutlineShopping, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Element } from '../../../../App';
// import { Once } from '../../../../newTec';
const CardShowFood = () => {
  const { Products } = useContext(Element);

  const retProduct = (stars) => {
    let array = [];
    for (let i = 0; i < 5; i++)
      array[i] = stars > i ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />;
    return array;
  };

  return Products.map((element, index) => {
    const { name, price, rate, pic, id } = element;

    return (
      <div
        key={index}
        id={id}
        className=' hover:border-cyan-400  hover:scale-105 hover:shadow-xl drop-shadow-md  hover:shadow-cyan-500 transition-all duration-200 rounded-lg border border-gray-400 p-2'
      >
        <img className='w-full object-cover' src={pic} alt='' />

        <div className=' flex items-center justify-between max-sm:flex-col   '>
          <div className='col-1 space-y-1'>
            <h1 className='mt-2 flex text-yellow-400 gap-2'>
              {retProduct(rate)}
            </h1>
            <h1 className='font-bold text-lg'>{name}</h1>
            <h1 className='font-medium text-2xl text-red-600 '>${price}</h1>
          </div>

          <div className='col-2'>
            <button
              value={`sami`}
              type='button'
              className='bg-accent hover:bg-accentDark rounded-full p-2 text-2xl text-white self-stretch align-top justify-items-start '
            >
              <AiOutlineShopping />
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default CardShowFood;
