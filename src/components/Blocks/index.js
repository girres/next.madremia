import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { ArrowTurnRightDownIcon } from '@heroicons/react/20/solid';

export const BlockHero = ({ dict = {} }) => {
  const { hero: terms = {} } = dict?.blocks || {};
  return (
    <div className='bg-mm-black lg:min-h-screen relative'>
      <div className='w-full h-full lg:absolute top-0 left-0 right-0 bottom-0 lg:flex lg:flex-col items-center justify-center'>
        <div className='w-full mm-container'>
          <p className='text-mm-beige text-[7vw] leading-[6vw] pt-20 fontBold'>
            {terms?.text1 ?? '---'}
            {` `}
            <span className='text-mm-orange'>{terms?.text2 ?? '---'}</span>
          </p>
        </div>
        <div className='w-full mt-28'>
          <Marquee gradient={false}>
            <div className='flex items-center uppercase py-5 space-x-10'>
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[20vw] ml-10'>
                {terms?.text3 ?? '---'}
              </p>
              <Image
                src='/images/gif/friends.gif'
                alt='MadreMía logo'
                width={200}
                height={200}
                quality={100}
                priority
                className='max-h-[100px] max-w-[100px] lg:max-h-[200px] lg:max-w-[200px]'
              />
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[20vw]'>
                {terms?.text4 ?? '---'}
              </p>
              <Image
                src='/images/gif/office.webp'
                alt='MadreMía logo'
                width={200}
                height={200}
                quality={100}
                priority
                className='max-h-[100px] max-w-[100px] lg:max-h-[200px] lg:max-w-[200px]'
              />
            </div>
          </Marquee>
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

export const BlockProjects = ({ dict = {} }) => {
  const { projects = {} } = dict?.blocks || {};
  const { items = [] } = projects || {};

  if (!items || items.length < 1) return null;

  return (
    <div className='bg-mm-beige py-10'>
      <div className='block-title px-5 my-20'>
        <h2>
          {projects?.title ?? '-'}
          <ArrowTurnRightDownIcon className='icon' />
        </h2>
      </div>
      <div className='space-y-5 mm-container'>
        {items.map((project, index) => (
          <div key={index} className='flex w-full flex-col md:flex-row'>
            <div className='max-w-[700px]'>
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={750}
                quality={100}
                priority
              />
            </div>
            <div className='py-5 md:py-0 md:px-5 w-full'>
              <p className='text-gray-400 font-bold mb-3'>{project.title}</p>
              <div className='mb-10'>
                <p className='fontBold mb-3 text-lg'>
                  {project?.heading ?? '--'}
                </p>
                <p className='text-sm'>{project.description}</p>
              </div>
              <div>
                <div className='space-x-2'>
                  {project.service.map((service, index) => (
                    <div
                      className='badge rounded text-sm border-mm-orange bg-mm-orange text-mm-beige'
                      key={index}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
