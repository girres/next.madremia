'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { clsx } from 'clsx';

import Forms from './forms';

const limit = 3;

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [oldStep, setOldStep] = useState(1);

  // GSAP for animations
  useEffect(() => {
    gsap.fromTo(
      '.container-typeform.bottom-top',
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'personality',
      }
    );
    gsap.fromTo(
      '.container-typeform.top-bottom',
      {
        opacity: 0,
        y: -400,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'personality',
      }
    );
  }, [step]);

  // Go back to the previous step
  const prevStep = () => {
    setOldStep(step);
    if (step > 1) setStep(step - 1);
  };

  function submit(submitStep) {
    setOldStep(submitStep);
    if (submitStep >= 1 && submitStep < limit) setStep(step + 1);
  }

  return (
    <div className='mm-type-form'>
      <div
        className={clsx(
          'container-typeform mm-container text-mm-beige',
          oldStep <= step ? 'bottom-top' : 'top-bottom'
        )}
      >
        {/* Step 1: Name */}
        {step === 1 && <Forms.Step1 step={step} submit={submit} />}

        {/* Step 2: Email */}
        {step === 2 && (
          <Forms.Step2 step={step} submit={submit} prevStep={prevStep} />
        )}

        {/* Step 3: Age */}
        {step === 3 && (
          <Forms.Step3
            step={step}
            submit={submit}
            prevStep={prevStep}
            finalSubmit
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
