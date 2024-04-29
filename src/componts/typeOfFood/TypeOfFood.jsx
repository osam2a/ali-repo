import Card from './card/Card';
import data from '../../data.json';
import './typeOfFood.css';
const TypeOfFood = () => {
  return (
    <section
      id='0wd'
      key={'scf99d'}
      className='container grid grid-cols-1 grid-rows-6 sm:grid-rows-2 
      mt-9 p-2 py-8 border-t-4
      sm:grid-cols-3 lg:grid-cols-4 lg:mt-10 gap-7 '
    >
      {data.types.map((item, index) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            numberOfProducts={item.numberOfProducts}
            nameOfType={item.name}
            pic={item.pic}
          />
        );
      })}
    </section>
  );
};

export default TypeOfFood;
