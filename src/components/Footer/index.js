import Link from 'next/link';

const Comp = ({ dict = {} }) => {
  return (
    <footer className='bg-gray-300'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <div className='text-white font-bold text-xl'>MadreMia</div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-white hover:text-gray-300'>
              {dict.menu.home}
            </Link>
          </li>
          <li>
            <Link href='/us' className='text-white hover:text-gray-300'>
              {dict.menu.us}
            </Link>
          </li>
          <li>
            <Link href='/diagnosis' className='text-white hover:text-gray-300'>
              {dict.menu.diagnosis}
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Comp;
