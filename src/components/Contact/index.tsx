'use client';

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Step1 from './forms/Step1';
import Step2 from './forms/Step2';
import { FormValues } from './forms/types';
import { Add } from '@/actions/Leads';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  has_digital_product: Yup.boolean(),
  terms: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  has_digital_product: false,
  terms: false,
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (values: FormValues) => {
    Add(values)
      .then((res) => {
        console.log('🚀 ~ Add ~ res:', res);
      })
      .catch((error) => {
        console.log('🚀 ~ handleSubmit ~ error:', error);
      });
  };

  return (
    <div className='max-w-md mx-auto mt-10'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-2xl font-bold mb-4'>Multi-Step Form</h2>
            {step === 1 && (
              <Step1
                formik={formik}
                next={() => {
                  formik.validateForm().then((errors) => {
                    const step1Fields = ['name', 'email', 'phone'];
                    const hasErrors = step1Fields.some(
                      (field) => errors[field]
                    );
                    if (!hasErrors) {
                      setStep(2);
                    } else {
                      step1Fields.forEach((field) => {
                        formik.setFieldTouched(field, true);
                      });
                    }
                  });
                }}
              />
            )}
            {step === 2 && <Step2 formik={formik} prev={() => setStep(1)} />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
