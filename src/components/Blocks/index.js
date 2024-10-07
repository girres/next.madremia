import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { clsx } from 'clsx';

import { useTranslations, useMessages } from 'next-intl';
import { Link } from '@/i18n/routing';

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

export const BlockHero = () => {
  const t = useTranslations('blocks.hero');

  return (
    <div className='bg-mm-black lg:h-screen relative'>
      <div className='w-full h-full pt-20 lg:pt-0 lg:absolute top-0 left-0 right-0 bottom-0 lg:flex lg:flex-col items-center justify-center'>
        <div className='w-full h-full lg:flex justify-end flex-col'>
          <p className='text-mm-beige text-[7vw] leading-[7vw] fontBold mm-container py-[5%] lg:pb-[5%]'>
            {t('text1') ?? '---'}
            {` `}
            <span className='text-mm-orange'>{t('text2') ?? '---'}</span>
          </p>
          <Marquee>
            <div className='flex items-center lg:items-start uppercase py-5 space-x-10'>
              <p className='text-mm-beige fontDGEBold text-[20vw] leading-[17vw] ml-10 tracking-wider'>
                {t('text3') ?? '---'}
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
                {t('text4') ?? '---'}
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

export const BlockProjects = () => {
  const messages = useMessages();
  const t = useTranslations('blocks.projects');
  const projects = Object.keys(messages.blocks.projects.items);

  return (
    <div className='bg-mm-beige py-10'>
      <div className='block-title px-5 my-20'>
        <h2>
          {t('title')}
          <Icon className='icon' />
        </h2>
      </div>
      <div className='space-y-5 mm-container'>
        {projects.map((index) => {
          const tags =
            messages?.blocks?.projects?.items?.[index]?.service || [];
          return (
            <div key={index} className='flex w-full flex-col md:flex-row'>
              <div className='max-w-[700px]'>
                <Image
                  src={t(`items.${index}.image`)}
                  alt={t(`items.${index}.title`)}
                  width={1200}
                  height={750}
                  quality={100}
                  priority
                />
              </div>
              <div className='py-5 md:py-0 md:px-5 w-full text-sm'>
                <p className='text-mm-black/50 font-bold mb-2'>
                  {t(`items.${index}.title`)}
                </p>
                <div className='mb-10'>
                  <p className='fontBold mb-3 text-lg'>
                    {t(`items.${index}.heading`)}
                  </p>
                  <p className=''>{t(`items.${index}.description`)}</p>
                </div>
                <div>
                  <div className='badge-service-container'>
                    {tags.map((service, index) => (
                      <div className='badge-service' key={index}>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BlockClients = () => {
  const t = useTranslations('blocks.clients');
  const clients = [
    {
      title: 'anm',
      image: '/images/clients/anm.png',
    },
    {
      title: 'esd',
      image: '/images/clients/esd.png',
    },
    {
      title: 'fixer',
      image: '/images/clients/fixer.png',
    },
    {
      title: 'herragro',
      image: '/images/clients/herragro.png',
    },
    {
      title: 'hotelcasablanca',
      image: '/images/clients/hotelcasablanca.png',
    },
    {
      title: 'raw',
      image: '/images/clients/raw.png',
    },
    {
      title: 'rtvc',
      image: '/images/clients/rtvc.png',
    },
    {
      title: 'vecol',
      image: '/images/clients/vecol.png',
    },
    {
      title: 'carbonbox',
      image: '/images/clients/carbonbox.png',
    },
    {
      title: 'espaciocontinuo',
      image: '/images/clients/espaciocontinuo.png',
    },
    {
      title: 'goclean',
      image: '/images/clients/goclean.png',
    },
    {
      title: 'panasonic',
      image: '/images/clients/panasonic.png',
    },
    {
      title: 'reteki',
      image: '/images/clients/reteki.png',
    },
    {
      title: 'saudia',
      image: '/images/clients/saudia.png',
    },
    {
      title: 'viva',
      image: '/images/clients/viva.png',
    },
  ];

  return (
    <div className='mt-20 mb-28'>
      <div className='block-title px-5 mb-20'>
        <h2>
          {t('title')}
          <Icon className='icon' />
        </h2>
      </div>
      <Marquee speed='20' autoFill direction='right'>
        <div className='flex justify-between items-center w-full'>
          {clients.map((item, index) => (
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

export const BlockDiagnosis = () => {
  const messages = useMessages();
  const {
    title = null,
    text1 = null,
    text2 = null,
    textClick = null,
  } = messages.blocks.diagnosis || {};
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
                {textClick ?? 'Click'}
              </div>
            </Link>
            {text2 && (
              <p className='text-mm-beige uppercase fontDGEBold text-[20vw] leading-[19vw] tracking-wider'>
                {text2}
              </p>
            )}
            <Link href='/diagnosis'>
              <div className='text-lg underline text-mm-beige flex items-center justify-center bg-mm-orange h-[150px] w-[150px] lg:h-[200px] hover:scale-125 transition-all'>
                {textClick ?? 'Click'}
              </div>
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export const BlockUsHeading = () => {
  const t = useTranslations('blocks.us');
  return (
    <div className='block'>
      <div className='hidden lg:flex items-center flex-wrap space-x-20 text-left'>
        <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
          {t('text1')}
        </div>
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
        <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
          {t('text2')}
        </div>
        <div className='uppercase fontDGEBold text-[20vw] leading-[20vw]'>
          {t('text3')}
        </div>
        <Image
          src='/images/static/2.jpg'
          alt='MadreMía team'
          width={750}
          height={453}
          quality={100}
          priority
          className='max-h-[200px] max-w-[200px] lg:max-h-[600px] lg:max-w-[600px]'
        />
      </div>
      <div className='block lg:hidden'>
        <div className='uppercase fontDGEBold text-[20vw] leading-[20vw] tracking-wider flex items-center justify-start flex-wrap'>
          <span className='mr-5'>{t('text1')}</span>
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
          <span className='mx-5'>{t('text2')}</span>
          <span className=''>{t('text3')}</span>
        </div>
      </div>
    </div>
  );
};

export const BlockText = ({ env = false }) => {
  const t = useTranslations('blocks.us2');

  return (
    <div className={clsx('py-10 lg:py-20', env && 'env')}>
      <div className='block-title mb-10'>
        <h2>
          {t('title')}
          <Icon className='icon' />
        </h2>
      </div>
      <div className='text-sm max-w-[700px]'>
        <p className='py-3'>{t('text1')}</p>
        <p className='py-3'>{t('text2')}</p>
      </div>
    </div>
  );
};

export const BlockProfiles = () => {
  const messages = useMessages();
  const t = useTranslations('blocks.us3');
  const items = Object.keys(messages.blocks.us3.items);

  if (!items || items.length < 1) return null;

  return (
    <div className='bg-mm-beige py-10 flex justify-center lg:justify-end'>
      <div className='max-w-[1200px]'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10'>
          {items.map((index) => (
            <div key={index} className='overflow-hidden'>
              <div>
                <Image
                  src={t(`items.${index}.image`)}
                  alt={t(`items.${index}.name`)}
                  text={t(`items.${index}.name`)}
                  width={520}
                  height={750}
                  quality={100}
                  priority
                  className='w-full max-h-[375px] lg:max-w-[260px] lg:max-h-[375px]'
                />
              </div>
              {/* Name */}
              <p className='fontMedium text-lg'>{t(`items.${index}.name`)}</p>
              {/* Email */}
              <p className='text-gray-500 font-light underline text-sm'>
                <Link
                  href={`mailto:${t(`items.${index}.email`)}`}
                  targrt='_blank'
                >
                  {t(`items.${index}.email`)}
                </Link>
              </p>
              {/* Position */}
              <p className='text-lg fontMedium text-mm-orange'>
                {t(`items.${index}.position`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlockServices = () => {
  const messages = useMessages();
  const t = useTranslations('blocks.services');
  const items = messages.blocks.services.items;

  return (
    <div className={clsx('py-10 lg:py-20')}>
      <div className='block-title mb-10'>
        <h2>
          {t('title')}
          <Icon className='icon' />
        </h2>
      </div>
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
