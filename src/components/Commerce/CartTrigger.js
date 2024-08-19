'use client';

import { useContext } from 'react';
import { clsx } from 'clsx';
import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/solid';

// Context
import { Context } from '@/context';

// Import Toast
import Toast from 'react-hot-toast';

const Component = () => {
  // Context
  const { Commerce } = useContext(Context);
  const { lineItems = [] } = Commerce;

  const handleClick = () => {
    Commerce.setCartOpen(!Commerce.cartOpen);
    // TODO: Implement CART MODAL.
    Toast.success('Cart modal should be implemented.');
  };

  return (
    <div className='relative flex items-center'>
      <button className={clsx('btn relative')} onClick={handleClick}>
        <ShoppingBagIcon className='w-8 h-8' />
        <span
          className={clsx(
            'badge text-xs bg-green-600 absolute top-0 right-0',
            lineItems.length === 0 && 'hidden'
          )}
        >
          {Commerce.totalQuantity()}
        </span>
      </button>
      {lineItems.length > 0 && (
        <button
          className={clsx('btn btn-link')}
          onClick={() => Commerce.clearCart()}
        >
          <TrashIcon className='w-4 h-4' />
        </button>
      )}
    </div>
  );
};

export default Component;
