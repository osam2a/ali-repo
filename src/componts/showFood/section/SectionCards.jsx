import { useContext } from 'react';
import CardShowFood from './cardShowFood/CardShowFood';
import { Element } from '../../../App';
const section = () => {
  const { banner } = useContext(Element);
  return (
    <section className='mt-7  grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-5'>
      <div className='banner w-fit rounded-lg '>
        <img src={banner} alt='' />
      </div>
      <CardShowFood />;
    </section>
  );
};

export default section;
