/* eslint-disable no-unused-vars */
import Link from 'next/link';

const Comp = ({ dict = {} }) => {
  const data = dict?.footer || {};
  return (
    <footer className='bg-mm-black text-mm-beige'>
      <div className='mm-container lg:flex items-start justify-between p-4'>
        <div className='w-full lg:w-[50%] grid grid-cols-3 gap-5 items-start justify-between'>
          <div className='text-left text-sm'>
            <h2 className='text-mm-orange font-bold text-sm lg:text-lg mb-4'>
              {data?.title1 ?? 'Ubicaciones'}
            </h2>
            <ul className='text-left'>
              <li>Madrid</li>
              <li>Miami</li>
              <li>Bogotá</li>
            </ul>
          </div>
          <div className='text-left text-sm'>
            <h2 className='text-mm-orange font-bold text-sm lg:text-lg mb-4'>
              {data?.title2 ?? 'Síguenos'}
            </h2>
            <ul>
              <li>
                <Link href={process.env.NEXT_PUBLIC_INSTAGRAM} target='_blank'>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target='_blank'>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className='text-left text-sm hidden'>
            <h2 className='text-mm-orange font-bold text-sm lg:text-lg mb-4'>
              {data?.title3 ?? 'Legal'}
            </h2>
            <ul>
              <li>
                <Link href='/terms' target='_blank'>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href='/privacy' target='_blank'>
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full lg:w-[50%] text-right text-sm'>
          <div className='divider block lg:hidden' />
          <ul>
            <li>
              <Link href='mailto:contacto@agenciamadremia.com' target='_blank'>
                contacto@agenciamadremia.com
              </Link>
            </li>
            <li>
              {data?.textFooter} - {new Date().getFullYear()}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Comp;
