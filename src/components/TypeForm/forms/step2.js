import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number()
    .required('Age is required')
    .min(18, 'You must be at least 18 years old'),
});

const Component = ({ step, submit, prevStep = null }) => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Handle the "enter" key press event here
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        submit(step, { data: 'step2' });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [step, submit]);

  return (
    <div className='text-mm-beige'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <p className='label'>¿Cuál es tu nombre?</p>
          <p className='desc'>
            Lo usaremos en todas las comunicaciones futuras.
          </p>
          <div className='wrapper-field'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              className='w-full p-2 border rounded'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className='text-red-500 text-sm'>{formik.errors.name}</p>
            )}
          </div>
        </div>
        <div className='w-full actions flex items-center justify-between'>
          {prevStep && (
            <button onClick={() => prevStep()} className='btn-mm-beige'>
              Back
            </button>
          )}
          <div>
            <button
              onClick={() => submit(step, { data: 'step1' })}
              className='btn btn-mm-orange'
            >
              Next
            </button>
            <span className='text-xs mx-5'>pulsa Enter ↵</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Component;
