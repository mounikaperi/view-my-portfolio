import React, { useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import contactMe from '../images/contactMe.jpg';
import { BiLoaderAlt } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

  const form = useRef();
  const [values, setValues] = useState({
    to_name: 'Sai Mounika Peri',
    from_name: '', 
    user_email: '', 
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.from_name.trim() || !values.user_email.trim() || !values.message.trim()) {
      toast.warning('Empty Fields!!!');
      return false;
    }
    setLoading(true);
    emailjs.sendForm(
      'service_p0i7ptp', 
      'template_ymuqsk5', 
      form.current, 
      'u4sI4WrGEjW0oBjvb'
    ).then((result) => {
      setValues({from_name: '', user_email: '', message: ''});
      setLoading(false);
      setSuccess(true);
      toast.success('Your message has been sent successfully');
    }, (error) => {
      setLoading(false);
      setValues({from_name: '', user_email: '', message: ''});
      toast.error(`There was an error sending your message. ${error}`);
    });
  };

  const handleChange = (event) => {
    setValues((previousInput) => ({
      ...previousInput,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <SectionWrapper id='contact' className='mb-16 mx-4 lg:mx-0'>
      <h2 className='text-center text-4xl'>Contact Me</h2>
      <ToastContainer />
      <div className='w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl'>
        <img src={contactMe} style={{ objectFit: 'cover', layout: 'fill', quality: 100 }} loading='lazy' alt='contact' className='hidden md:block
          w-1/2 h-full object-cover object-fit' width={200} height={200} />
        <div className='flex-1'>
          <h3 className='text-2xl'>Get in touch</h3>
          <p className='text-gray-400 mb-4 text-sm md:text-base'>My inbox is always open. Whether you have 
            a question or just want to say hello, I will try my best to get back to you!</p>
          <form onSubmit={handleSubmit} ref={form} className='flex flex-col gap-4 rounded-xl'>
            <input value={values.to_name} name='to_name' type='text' className='hidden' />
            <input onChange={handleChange} required value={values.from_name} name='from_name' type='text'
              placeholder='Full Name *' className='outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400
              rounded-lg py-3 px-4' />
            <input onChange={handleChange} required value={values.user_email} name='user_email' type='email'
              placeholder='Email *' className='outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400
              rounded-lg py-3 px-4' />
            <textarea onChange={handleChange} required value={values.message} name='message' rows={4}
              placeholder='Message *' className='outline-none resize-none bg-gray-100 dark:bg-grey-800
              placeholder-gray-400 rounded-lg py-3 px-4' />
            <button disabled={loading} className='px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors
              text-white rounded-lg disabled:cursor-not-allowed self-end'>
                { loading ? <span className='flex items-center gap-2'>Say Hello <BiLoaderAlt className='animate-spin'/></span> : 'Say Hello 👋'}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ContactUs;
