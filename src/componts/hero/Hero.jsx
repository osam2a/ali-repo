import CardPic from './cardPic/CardPic.jsx';

import hero1 from '../../assets/hero__1.jpg';
import hero2 from '../../assets/hero__2.jpg';
import hero3 from '../../assets/hero__3.jpg';

const Hero = () => {
  return (
    <section className='container pt-4 '>
      <div className='h-fit grid xl:grid-cols-3 xl:grid-rows-2 gap-8 '>
        <CardPic
          pic={hero1}
          price={18.35}
          textPar='100% Orginal Dry Fruits'
          textH1=' Dried Fruits Best Healthy'
          spiecalSetting={{
            firstDiv: `xl:col-span-2 xl:row-start-1 xl:row-end-[-1]`,
            h2: ` text-2xl sm:text-4xl md:text-6xl font-bold`,
          }}
        />
        <CardPic
          pic={hero2}
          price={25}
          textH1='Best Yummy Pizza'
          textPar=''
          spiecalSetting={{}}
        />
        <CardPic
          pic={hero3}
          price={10}
          textH1='Best Yummy Chips'
          textPar=''
          spiecalSetting={{}}
        />
      </div>
    </section>
  );
};

export default Hero;
