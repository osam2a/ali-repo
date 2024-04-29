import HeaderFood from './header/HeaderFood';
import SectionCards from './section/SectionCards';

const Showfood = () => {
  return (
    <section className='show-food container mt-9 p-2 py-8 border-t-4 '>
      <HeaderFood />
      <SectionCards />
    </section>
  );
};

export default Showfood;
