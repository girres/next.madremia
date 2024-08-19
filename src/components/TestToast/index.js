'use client';

import toast from 'react-hot-toast';

// Icons.
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const notifySuccess = () => toast.success('Here is your Success toast.');
const notifyError = () => toast.error('Here is your Error toast.');
const notify = () =>
  toast(() => (
    <div className='flex items-center'>
      <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
      <span>Here is your HTML toast.</span>
    </div>
  ));

const Comp = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <button className='btn btn-success' onClick={notifySuccess}>
        Show me a success toast
      </button>
      <button className='btn btn-error' onClick={notifyError}>
        Show me an error toast
      </button>
      <button className='btn btn-info' onClick={notify}>
        Show me an info toast
      </button>
    </div>
  );
};

export default Comp;
