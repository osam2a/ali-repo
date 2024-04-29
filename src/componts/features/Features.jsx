import './features.css';
const Features = ({ props }) => {
  return (
    <section
      className='container mt-9 p-2 py-8 border-t-4
     flex justify-between items-center gap-3 flex-wrap '
    >
      {props.map((item, index) => {
        return (
          <div
            key={index}
            className='w-[225px] flex justify-center items-center flex-wrap border rounded p-5  '
          >
            <div className='space-y-1 w-fit'>
              <h1 className='text-accent text-xl font-bold first-letter:uppercase'>
                {item.title}
              </h1>
              <p className='text-gray-400'>{item.bio}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
