'use client';

import toast from 'react-hot-toast';

// Icons.
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

// Components
import CartBtn from '@/components/Commerce/CartBtn';

const notifyPromise = () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Got the data');
    }, 2000);
  });

  toast.promise(myPromise, {
    loading: 'Loading',
    success: 'Got the data',
    error: 'Error when fetching',
  });
};
const notifySuccess = () => toast.success('Here is your Success toast.');
const notifyError = () => toast.error('Here is your Error toast.');
const notify = () =>
  toast(() => (
    <div className='flex items-center'>
      <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
      <p>
        This is an HTML Toast + <strong>Heroicons</strong>.
      </p>
    </div>
  ));

const Comp = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <button className='btn btn-warning' onClick={notifyPromise}>
        Promise toast
      </button>
      <button className='btn btn-success' onClick={notifySuccess}>
        Show me a success toast
      </button>
      <button className='btn btn-error' onClick={notifyError}>
        Show me an error toast
      </button>
      <button className='btn btn-info' onClick={notify}>
        Show me an info toast
      </button>
      <CartBtn />
    </div>
  );
};

export default Comp;
