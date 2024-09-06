import Image from 'next/image';
import Link from 'next/link';
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
          <Marquee autoFill>
            <div className='flex items-center uppercase py-5 space-x-10'>
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[20vw] ml-10'>
                {terms?.text3 ?? '---'}
              </p>
              <Image
                src='/images/gif/mm_team.gif'
                alt='MadreMía logo'
                width={250}
                height={200}
                quality={100}
                priority
                className='max-h-[100px] max-w-[100px] lg:max-h-[200px] lg:max-w-[250px]'
              />
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[20vw]'>
                {terms?.text4 ?? '---'}
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
  const { title = null, items = [] } = projects || {};

  if (!items || items.length < 1) return null;

  return (
    <div className='bg-mm-beige py-10'>
      {title && (
        <div className='block-title px-5 my-20'>
          <h2>
            {title}
            <ArrowTurnRightDownIcon className='icon' />
          </h2>
        </div>
      )}
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

export const BlockClients = ({ dict = {} }) => {
  const { clients = {} } = dict?.blocks || {};
  const { title = null, items = [] } = clients || {};

  if (!items || items.length < 1) return null;

  return (
    <div className='bg-mm-beige py-10'>
      <div className='block-title px-5 my-20'>
        <h2>
          {title ?? '-'}
          <ArrowTurnRightDownIcon className='icon' />
        </h2>
      </div>
      <Marquee speed='20' autoFill gradient gradientColor='#F7F6E7'>
        <div className='flex justify-between items-center w-full'>
          {items.map((item, index) => (
            <Image
              src={item.image}
              alt={item.title}
              text={item.title}
              width={150}
              height={150}
              key={index}
              className='mx-10'
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export const BlockDiagnosis = ({ dict = {} }) => {
  const { diagnosis: block = {} } = dict?.blocks || {};
  const { title = null } = block || {};
  return (
    <div className='bg-mm-black py-10'>
      {title && (
        <div className='block-title inv px-5 my-20'>
          <h2>
            {title}
            <ArrowTurnRightDownIcon className='icon' />
          </h2>
        </div>
      )}
      <div className='w-full mt-28'>
        <Marquee autoFill direction='right'>
          <div className='flex items-center py-5 space-x-10'>
            <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[20vw] ml-10'>
              {block?.text1 ?? '---'}
            </p>
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] hover:scale-125 transition-all'>
                {block?.textClick ?? 'Click'}
              </div>
            </Link>
            <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[20vw]'>
              {block?.text2 ?? '---'}
            </p>
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] hover:scale-125 transition-all'>
                {block?.textClick ?? 'Click'}
              </div>
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};
