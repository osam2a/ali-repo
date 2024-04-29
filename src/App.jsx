import { useState, createContext } from 'react';
import data from './data.json';
import Navbar from './componts/Navbar/Navbar';
import Hero from './componts/hero/Hero';
import TypeOfFood from './componts/typeOfFood/TypeOfFood';
import Showfood from './componts/showFood/Showfood';
import Gallray from './componts/gallray/Gallray';
import News from './componts/news/News';
import SendNews from './componts/sendNews/SendNews';
import Features from './componts/features/Features';
import './App.css';

const Element = createContext(null);
const Producations = createContext([]);
const App = () => {
  const [goods, setGoods] = useState(data.goods);
  const [gallray, setGallray] = useState(data.gallray);
  const [news, setNews] = useState(data.news);
  const [features, setFeatures] = useState(data.features);

  return (
    <main className='container relative  '>
      <Navbar />
      <Hero />
      <TypeOfFood />
      {goods.map((element, index) => {
        return (
          <Element.Provider key={index + 1} value={element}>
            <Showfood />
          </Element.Provider>
        );
      })}
      <Gallray pic={gallray} />
      <News props={news} />
      <SendNews />
      <Features props={features} />
    </main>
  );
};

export default App;
export { Element, Producations };
