// import { usePathname } from 'next/navigation';

import Link from 'next/link';

const Comp = () => {
  // const pathname = usePathname();

  return (
    <header className='bg-gray-800'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <div className='text-white font-bold text-xl'>MadreMia</div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-white hover:text-gray-300'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/us' className='text-white hover:text-gray-300'>
              Us
            </Link>
          </li>
          <li>
            <Link href='/diagnosis' className='text-white hover:text-gray-300'>
              Diagnosis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Comp;
