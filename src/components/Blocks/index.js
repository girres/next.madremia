import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { ArrowTurnRightDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

export const BlockHero = ({ dict = {} }) => {
  const { hero: terms = {} } = dict?.blocks || {};
  return (
    <div className='bg-mm-black h-screen relative'>
      <div className='w-full h-full lg:absolute top-0 left-0 right-0 bottom-0 lg:flex lg:flex-col items-center justify-center'>
        <div className='w-full h-full lg:flex justify-end flex-col'>
          <p className='text-mm-beige text-[7vw] leading-[7vw] fontBold mm-container py-[5%] lg:pb-[5%]'>
            {terms?.text1 ?? '---'}
            {` `}
            <span className='text-mm-orange'>{terms?.text2 ?? '---'}</span>
          </p>
          <Marquee>
            <div className='flex items-center lg:items-start uppercase py-5 space-x-10'>
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[17vw] ml-10 tracking-wider'>
                {terms?.text3 ?? '---'}
              </p>
              <Image
                src='/images/gif/mm_team.gif'
                alt='MadreMía logo'
                unoptimized
                width={250}
                height={200}
                quality={100}
                priority
                className='h-[80px] w-auto lg:min-h-[200px] lg:w-auto my-2'
              />
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[17vw] tracking-wide'>
                {terms?.text4 ?? '---'}
              </p>
              <Image
                src='/images/static/1.jpg'
                alt='MadreMía logo'
                width={200}
                height={200}
                quality={100}
                priority
                className='h-[80px] w-auto lg:min-h-[200px] lg:w-auto my-2'
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
            <div className='py-5 md:py-0 md:px-5 w-full text-sm'>
              <p className='text-mm-black/50 font-bold mb-2'>{project.title}</p>
              <div className='mb-10'>
                <p className='fontBold mb-3 text-lg'>
                  {project?.heading ?? '--'}
                </p>
                <p className=''>{project.description}</p>
              </div>
              <div>
                <div className='badge-service-container'>
                  {project.service.map((service, index) => (
                    <div className='badge-service' key={index}>
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
    <div className='mt-20 mb-28'>
      <div className='block-title px-5 mb-20'>
        <h2>
          {title ?? '-'}
          <ArrowTurnRightDownIcon className='icon' />
        </h2>
      </div>
      <Marquee
        speed='20'
        autoFill
        direction='right'
        gradient
        gradientColor='#F7F6E7'
      >
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
  const {
    title = null,
    text1 = null,
    text2 = null,
    text3 = null,
  } = block || {};
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
        <Marquee autoFill direction='left'>
          <div className='flex items-center py-5 space-x-10'>
            {text1 && (
              <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[19vw] ml-10 tracking-wider'>
                {text1}
              </p>
            )}
            {text2 && (
              <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[19vw] pl-10 tracking-wider'>
                {text2}
              </p>
            )}
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] lg:h-[200px] hover:scale-125 transition-all'>
                {block?.textClick ?? 'Click'}
              </div>
            </Link>
            {text3 && (
              <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[19vw] tracking-wider'>
                {text3}
              </p>
            )}
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] lg:h-[200px] hover:scale-125 transition-all'>
                {block?.textClick ?? 'Click'}
              </div>
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export const BlockUsHeading = ({ data = {} }) => {
  const { text1 = null, text2 = null, text3 = null } = data || {};
  return (
    <div className='block'>
      <div className='flex items-center flex-wrap space-x-20 text-left'>
        {text1 && (
          <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
            {text1}
          </div>
        )}
        <Image
          src='/images/gif/mm_team.gif'
          alt='MadreMía logo'
          unoptimized
          width={300}
          height={300}
          quality={100}
          priority
          className='max-h-[100px] max-w-[100px] lg:max-h-[300px] lg:max-w-[300px]'
        />
        {text2 && (
          <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
            {text2}
          </div>
        )}
        {text3 && (
          <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
            {text3}
          </div>
        )}
        <Image
          src='/images/gif/us.gif'
          alt='MadreMía logo'
          unoptimized
          width={800}
          height={800}
          quality={100}
          priority
          className='max-h-[200px] max-w-[200px] lg:max-h-[600px] lg:max-w-[600px]'
        />
      </div>
    </div>
  );
};

export const BlockText = ({ data = {}, env = false }) => {
  const { title = null, text1 = null, text2 = null } = data || {};

  return (
    <div className={clsx('py-10 lg:py-20', env && 'env')}>
      {title && (
        <div className='block-title mb-10'>
          <h2>
            {title}
            <ArrowTurnRightDownIcon className='icon' />
          </h2>
        </div>
      )}
      <div className='text-sm max-w-[700px]'>
        {text1 && <p className='py-3'>{text1}</p>}
        {text2 && <p className='py-3'>{text2}</p>}
      </div>
    </div>
  );
};

export const BlockProfiles = ({ data = {} }) => {
  const { items = [] } = data || {};

  if (!items || items.length < 1) return null;

  return (
    <div className='bg-mm-beige py-10 flex justify-center lg:justify-end'>
      <div className='max-w-[1200px]'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10'>
          {items.map((item, index) => (
            <div key={index} className='overflow-hidden'>
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  text={item.title}
                  width={520}
                  height={750}
                  quality={100}
                  priority
                  className='w-full max-h-[375px] lg:max-w-[260px] lg:max-h-[375px]'
                />
              </div>
              {/* Name */}
              <p className='fontMedium text-lg'>{item.name}</p>
              {/* Email */}
              <p className='text-gray-500 font-light underline text-sm'>
                <Link href={`mailto:${item.email}`} targrt='_blank'>
                  {item.email}
                </Link>
              </p>
              {/* Position */}
              <p className='text-lg fontBold text-mm-orange'>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlockServices = ({ data = {} }) => {
  const { title = null, items = [] } = data || {};

  if (!items || items.length < 1) return null;

  return (
    <div className={clsx('py-10 lg:py-20')}>
      {title && (
        <div className='block-title mb-10'>
          <h2>
            {title}
            <ArrowTurnRightDownIcon className='icon' />
          </h2>
        </div>
      )}
      <div className='badge-service-container max-w-[700px] py-10'>
        {items.map((service, index) => (
          <div className='badge-service' key={index}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};
