import './gallray.css';

const Gallray = ({ pic }) => {
  return (
    <section
      className=' container mt-9 p-2 py-8 border-t-4
      flex flex-col md:flex-row justify-between items-center gap-11 '
    >
      {pic.map((image, index) => {
        return (
          <div key={index} className='w-full rounded-xl overflow-hidden'>
            <img
              className='hover:scale-110 transition-all'
              src={image}
              alt='pic'
            />
          </div>
        );
      })}
    </section>
  );
};

export default Gallray;
