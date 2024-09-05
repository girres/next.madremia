export const BlockHero = ({ dict = {} }) => {
  const { hero: terms = {} } = dict?.blocks || {};
  return (
    <div className='bg-mm-black min-h-screen relative'>
      <div className='w-full h-full bg-red-900 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center'>
        <div className='w-full mm-container'>
          <p className='text-mm-beige text-[7vw] leading-[6vw] pt-20'>
            {terms?.text1 ?? '---'}
            {` `}
            <span className='text-mm-orange'>{terms?.text2 ?? '---'}</span>
          </p>
        </div>
        <div className='bg-pink-600 w-full pt-28'>
          <h2 className='text-white fontDGEBold text-[20vw] leading-[18vw]'>
            Slide Hero infinity loop
          </h2>
        </div>
      </div>
    </div>
  );
};

export const BlockSlideHero = () => {
  return (
    <div className='bg-pink-600'>
      <h2 className='text-white text-3xl font-bold'>BlockSlideHero</h2>
    </div>
  );
};

export const BlockProjects = () => {
  return (
    <div className='bg-cyan-600'>
      <h2 className='text-white text-3xl font-bold'>BlockProjects</h2>
    </div>
  );
};

export const BlockClients = () => {
  return (
    <div className='bg-green-600'>
      <h2 className='text-white text-3xl font-bold'>BlockClients</h2>
    </div>
  );
};

export const BlockDiagnosis = () => {
  return (
    <div className='bg-blue-600'>
      <h2 className='text-white text-3xl font-bold'>BlockDiagnosis</h2>
    </div>
  );
};
