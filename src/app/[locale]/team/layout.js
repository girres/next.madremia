import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default async function Layout({ children }) {
  return (
    <>
      <main className='bg-mm-orange text-center py-10 min-h-screen'>
        <div className='flex items-center justify-center'>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='MadreMía logo'
              width={150}
              height={30}
              quality={30}
              priority
            />
          </Link>
        </div>
        <div className='flex items-center justify-center flex-col mt-10'>
          {children}
        </div>
      </main>
    </>
  );
}
