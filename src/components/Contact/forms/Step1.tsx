import React from 'react';
import { StepProps } from './types';

const Step1: React.FC<StepProps> = ({ formik, next }) => {
  const handleNext = () => {
    const errors = formik.validateForm();
    const step1Fields = ['name', 'email', 'phone'];
    const hasErrors = step1Fields.some((field) => errors[field]);

    if (!hasErrors) {
      next();
    } else {
      step1Fields.forEach((field) => {
        formik.setFieldTouched(field, true);
      });
    }
  };

  return (
    <div className='space-y-4'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          {...formik.getFieldProps('name')}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
        {formik.touched.name && formik.errors.name && (
          <div className='text-red-500 text-sm mt-1'>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          {...formik.getFieldProps('email')}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='text-red-500 text-sm mt-1'>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label
          htmlFor='phone'
          className='block text-sm font-medium text-gray-700'
        >
          Phone
        </label>
        <input
          type='tel'
          id='phone'
          {...formik.getFieldProps('phone')}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className='text-red-500 text-sm mt-1'>{formik.errors.phone}</div>
        )}
      </div>
      <div>
        <button
          type='button'
          onClick={handleNext}
          className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
