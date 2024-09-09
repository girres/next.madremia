import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
// import { ArrowTurnRightDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

const Icon = () => (
  <span className='icon'>
    <svg
      width='778'
      height='387'
      viewBox='0 0 778 387'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M302.001 40.0391L151.251 40.0368L0.5 40.0345V0L302.001 0.00457764C465.843 0.00453787 557.458 27.5945 604.673 93.8636C627.898 126.461 638.715 166.293 644.001 211.344C647.778 243.526 648.835 279.503 649.131 318.775L743.462 225.444C751.363 217.627 764.173 217.627 772.074 225.444C779.975 233.261 779.975 245.935 772.074 253.753L643.32 381.142C635.419 388.959 622.609 388.959 614.708 381.142L485.954 253.753C478.053 245.935 478.053 233.261 485.954 225.444C493.855 217.627 506.664 217.627 514.565 225.444L608.66 318.541C608.363 280.046 607.34 246.059 603.808 215.961C598.875 173.929 589.252 141.704 571.601 116.93C537.063 68.4548 465.172 40.039 302.001 40.0391Z'
      />
    </svg>
  </span>
);

export const BlockHero = ({ dict = {} }) => {
  const { hero: terms = {} } = dict?.blocks || {};
  return (
    <div className='bg-mm-black lg:h-screen relative'>
      <div className='w-full h-full pt-20 lg:pt-0 lg:absolute top-0 left-0 right-0 bottom-0 lg:flex lg:flex-col items-center justify-center'>
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
            <Icon className='icon' />
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
          <Icon className='icon' />
        </h2>
      </div>
      <Marquee speed='20' autoFill direction='right'>
        <div className='flex justify-between items-center w-full'>
          {items.map((item, index) => (
            <Image
              src={item.image}
              alt={item.title}
              text={item.title}
              width={150}
              height={150}
              key={index}
              className='mx-10 max-w-[100px] lg:max-w-[150px]'
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export const BlockDiagnosis = ({ dict = {} }) => {
  const { diagnosis: block = {} } = dict?.blocks || {};
  const { title = null, text1 = null, text2 = null } = block || {};
  return (
    <div className='bg-mm-black py-10'>
      {title && (
        <div className='block-title inv px-5 my-20'>
          <h2>
            {title}
            <Icon className='icon' />
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
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] lg:h-[200px] hover:scale-125 transition-all'>
                {block?.textClick ?? 'Click'}
              </div>
            </Link>
            {text2 && (
              <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[19vw] tracking-wider'>
                {text2}
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
      <div className='hidden lg:flex items-center flex-wrap space-x-20 text-left'>
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
      <div className='block lg:hidden'>
        <div className='uppercase fontDGEBold text-[20vw] leading-[20vw] tracking-wider flex items-center justify-start flex-wrap'>
          <span className='mr-5'>{text1}</span>
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
          <span className='mx-5'>{text2}</span>
          <span className=''>{text3}</span>
        </div>
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
            <Icon className='icon' />
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
            <Icon className='icon' />
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
