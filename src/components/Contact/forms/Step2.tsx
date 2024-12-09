import React from 'react';
import { StepProps } from './types';

const Step2: React.FC<StepProps> = ({ formik, prev }) => {
  return (
    <div className='space-y-4'>
      <div>
        <label
          htmlFor='city'
          className='block text-sm font-medium text-gray-700'
        >
          City
        </label>
        <input
          type='text'
          id='city'
          {...formik.getFieldProps('city')}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        />
        {formik.touched.city && formik.errors.city && (
          <div className='text-red-500 text-sm mt-1'>{formik.errors.city}</div>
        )}
      </div>
      <div>
        <label
          htmlFor='country'
          className='block text-sm font-medium text-gray-700'
        >
          Country
        </label>
        <select
          id='country'
          {...formik.getFieldProps('country')}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        >
          <option value=''>Select a country</option>
          <option value='usa'>United States</option>
          <option value='canada'>Canada</option>
          <option value='uk'>United Kingdom</option>
          <option value='australia'>Australia</option>
        </select>
        {formik.touched.country && formik.errors.country && (
          <div className='text-red-500 text-sm mt-1'>
            {formik.errors.country}
          </div>
        )}
      </div>
      <div>
        <label htmlFor='has_digital_product' className='flex items-center'>
          <input
            type='checkbox'
            id='has_digital_product'
            {...formik.getFieldProps('has_digital_product')}
            checked={formik.values.has_digital_product}
            className='rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
          />
          <span className='ml-2 text-sm text-gray-700'>
            Has Digital Products
          </span>
        </label>
      </div>
      {/* Add boolean Terms */}
      <div>
        <label htmlFor='terms' className='flex items-center'>
          <input
            type='checkbox'
            id='terms'
            {...formik.getFieldProps('terms')}
            checked={formik.values.terms}
            className='rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
          />
          <span className='ml-2 text-sm text-gray-700'>
            Accept Terms and Conditions
          </span>
        </label>
        {formik.touched.terms && formik.errors.terms && (
          <div className='text-red-500 text-sm mt-1'>{formik.errors.terms}</div>
        )}
      </div>
      <div className='flex space-x-4'>
        <button
          type='button'
          onClick={prev}
          className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Previous
        </button>
        <button
          type='submit'
          className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step2;
