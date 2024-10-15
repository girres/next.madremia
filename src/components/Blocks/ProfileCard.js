'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaCopy,
  FaWhatsapp,
} from 'react-icons/fa';
import { LuShare } from 'react-icons/lu';

export default function Component({
  name = null,
  position = null,
  linkedIn = null,
  phone = null,
  email = null,
  image = null,
}) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const [shareUrl, setShareUrl] = useState('');

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = new URL(pathname, window.location.origin);
    url.search = searchParams.toString();
    setShareUrl(url.toString());
  }, [pathname, searchParams]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Copiado al portapapeles', {
        duration: 4000,
        position: 'bottom-center',
      });
    });
  };

  const handleShare = (platform) => {
    let url;
    switch (platform) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank');
  };

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
              objectPosition: 'top',
            }}
            className='z-10'
          />
          <div className='absolute top-2 right-2 z-20'>
            <button
              onClick={() => setShowShareOptions(!showShareOptions)}
              className='p-2 bg-mm-orange/80 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300'
              aria-label='Compartir en redes sociales'
            >
              <LuShare className='w-6 h-6' />
            </button>
            {showShareOptions && (
              <div className='absolute right-0 mb-0 bg-white text-orange-500 p-2 rounded shadow-lg z-20'>
                <button
                  onClick={() => handleShare('linkedin')}
                  className='block p-2 hover:bg-orange-100 rounded'
                  aria-label='Compartir en LinkedIn'
                >
                  <FaLinkedin className='w-6 h-6' />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className='block p-2 hover:bg-orange-100 rounded'
                  aria-label='Compartir en WhatsApp'
                >
                  <FaWhatsapp className='w-6 h-6' />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold text-mm-black'>{name}</h2>
        <p className='text-lg'>{position}</p>
      </div>

      <div className='space-y-4 mt-10'>
        <Link
          href={linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-between bg-orange-600 p-3  hover:bg-orange-700 transition-colors'
        >
          <div className='flex items-center'>
            <FaLinkedin className='w-6 h-6 mr-3' />
            <span>Mi LinkedIn</span>
          </div>
        </Link>

        <div className='flex items-center justify-between bg-orange-600 p-3  hover:bg-orange-700 transition-colors'>
          <Link href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>
            <div className='flex items-center'>
              <FaPhone className='w-6 h-6 mr-3' />
              <span>{phone}</span>
            </div>
          </Link>
          <button
            onClick={() => handleCopy(phone)}
            className='ml-2 p-2 hover:bg-orange-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300'
            aria-label='Copiar número de teléfono'
          >
            <FaCopy className='w-4 h-4' />
          </button>
        </div>

        <div className='flex items-center justify-between bg-white text-orange-500 p-3  hover:bg-orange-100 transition-colors'>
          <Link
            href={`mailto:${email}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex items-center'>
              <FaEnvelope className='w-6 h-6 mr-3' />
              <span>{email}</span>
            </div>
          </Link>
          <button
            onClick={() => handleCopy(email)}
            className='ml-2 p-2 hover:bg-orange-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300'
            aria-label='Copiar email'
          >
            <FaCopy className='w-4 h-4' />
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
