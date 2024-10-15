import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaPhone, FaEnvelope, FaShareAlt } from 'react-icons/fa';

export default function Component({
  name = null,
  position = null,
  linkedIn = null,
  phone = null,
  email = null,
  image = null,
}) {
  if (!name || !position || !image) return null;

  return (
    <div className='w-full px-5 max-w-[500px] bg-mm-orange text-white'>
      <div className='flex justify-between items-start mb-6'>
        <div className='w-[250px] h-[250px] relative mx-auto'>
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>

      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold text-mm-black'>{name}</h2>
        <p className='text-lg'>{position}</p>
      </div>

      <div className='space-y-4 mt-10'>
        <Link
          href={linkedIn}
          className='flex items-center justify-between bg-orange-600 p-3  hover:bg-orange-700 transition-colors'
        >
          <div className='flex items-center'>
            <FaLinkedin className='w-6 h-6 mr-3' />
            <span>Mi LinkedIn</span>
          </div>
          <FaShareAlt className='w-4 h-4' />
        </Link>

        <Link
          href={`tel:${phone}`}
          className='flex items-center justify-between bg-orange-600 p-3  hover:bg-orange-700 transition-colors'
        >
          <div className='flex items-center'>
            <FaPhone className='w-6 h-6 mr-3' />
            <span>{phone}</span>
          </div>
          <FaShareAlt className='w-4 h-4' />
        </Link>

        <Link
          href={`mailto:${email}`}
          className='flex items-center justify-between bg-white text-orange-500 p-3  hover:bg-orange-100 transition-colors'
        >
          <div className='flex items-center'>
            <FaEnvelope className='w-6 h-6 mr-3' />
            <span>{email}</span>
          </div>
          <FaShareAlt className='w-4 h-4' />
        </Link>
      </div>
    </div>
  );
}
