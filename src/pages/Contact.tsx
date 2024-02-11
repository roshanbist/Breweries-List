import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Banner from '../components/banner/Banner';
import { FormInputs } from '../misc/type';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    alert(`Hi, the form has been successfully filled by ${formData.name}`);
    reset();
  };
  return (
    <>
      <Banner />
      <section className='py-10'>
        <div className='max-container'>
          <form
            className='max-w-[640px] mx-auto shadow-xl rounded-xl p-5 border flex flex-wrap flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className='mb-5 text-xl font-medium capitalize text-center border-b pb-4'>
              Get connected
            </h1>
            <div className='mb-5'>
              <label htmlFor='name' className='block mb-2 font-medium'>
                Name*
              </label>
              <input
                id='name'
                placeholder='john doe'
                className='form-input'
                required
                {...register('name', {
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
              />
              {errors.name && (
                <span className='form-error'>
                  Enter your name again, its too short
                </span>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block mb-2 font-medium'>
                Email*
              </label>
              <input
                className='form-input'
                required
                id='email'
                placeholder='john.doe@example.com'
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
              />
              {errors.email && (
                <span className='form-error'>Enter your valid email</span>
              )}
            </div>
            <div className='mb-5'>
              <label htmlFor='mobile' className='block mb-2 font-medium'>
                Mobile number
              </label>
              <input
                className='form-input'
                id='mobile'
                placeholder='+358 xxxxxxx'
                {...register('mobileNumber')}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='message' className='block mb-2 font-medium'>
                Message*
              </label>
              <textarea
                required
                className='form-input min-h-[200px]'
                id='message'
                placeholder='Please write your message here...'
                {...register('message', {
                  required: true,
                  minLength: 15,
                  maxLength: 500,
                })}
              ></textarea>
              {errors.message && (
                <span className='form-error'>
                  Message is too short, please write more
                </span>
              )}
            </div>
            <button
              className='uppercase px-4 py-3 rounded-lg min-w-[200px] self-center text-lg font-medium text-center bg-orange-600 hover:bg-orange-700 transition-colors ease-in-out text-white'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
