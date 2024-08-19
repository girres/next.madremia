'use client';

import { useContext } from 'react';
import { clsx } from 'clsx';
import { ShoppingBagIcon as Icon } from '@heroicons/react/24/solid';

// Context
import { Context } from '@/context';

const Component = () => {
  // Context
  const { Commerce } = useContext(Context);

  const handleClick = () => {
    Commerce.addToCart({
      id: 1,
      title: 'Product 1',
      price: 100,
      quantity: 1,
    });
  };

  return (
    <div className='relative'>
      <button className={clsx('btn btn-secondary')} onClick={handleClick}>
        <Icon className='w-8 h-8' />
        Add to cart 1 qty
      </button>
    </div>
  );
};

export default Component;
