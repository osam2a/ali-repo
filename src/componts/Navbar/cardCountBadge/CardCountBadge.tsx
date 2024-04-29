import React from 'react';

const CardCountBadge = ({ size, number }) => {
  return (
    <div
      className={`absolute bg-red-600 text-base text-white 
                 ${size} -right-3 -top-3 rounded-full text-center `}
    >
      {number}
    </div>
  );
};

export default CardCountBadge;
