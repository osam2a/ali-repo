const Card = ({ id, nameOfType, numberOfProducts, pic }) => {
  return (
    <div
      key={id}
      id={id}
      className='hover:border-cyan-400 hover:rotate-3 hover:scale-110 hover:shadow-md  hover:shadow-cyan-500 transition-all duration-200 cursor-pointer flex justify-between items-center gap-2  border border-gray-300 p-4 rounded-lg'
    >
      <div className='flex flex-col gap-2 w-fit'>
        <h1 className='font-bold text-xl'>{nameOfType}</h1>

        <p className='text-gray-400 text-sm'>
          {numberOfProducts}
          {numberOfProducts > 1 ? ` Products` : ` Product`}
        </p>
      </div>

      <img className='rounded-full w-5/12 ' src={pic} alt='pic' />
    </div>
  );
};

export default Card;
