const News = ({ props }) => {
  return (
    <section
      className=' container mt-9 p-2 py-8 border-t-4 space-y-7
      '
    >
      <div>
        {' '}
        <h1 className=' font-bold text-2xl '>Latest News </h1>
        <p className='text-gray-500'>
          Present posts in a best way to highlight interesting moments of your
          blog.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center gap-7 '>
        {props.map((item, index) => {
          const { pic, date, comment, title } = item;
          return (
            <div key={index} className='rounded-xl space-y-3'>
              <img
                className='hover:scale-105 transition rounded-xl'
                src={pic}
                alt='pic'
              />
              <h2 className='text-accent font-medium '>
                {`${date} / ${comment}`}
                {(comment === 1 && ` comment`) || ` comments`}
              </h2>
              <h1 className=' font-bold text-xl '>{title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
