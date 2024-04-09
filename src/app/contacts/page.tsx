import React from 'react';

type Props = {};

function Contacts(props: Props) {
  return (
    <form action="https://formspree.io/f/xbjvgoyr"
    method="POST">
      <div className='bg-black flex flex-col justify-center items-center text-white h-screen w-full'>
        <div className='text-8xl'>Contact Me</div>
        <div className='mt-3'>
          <input type="email" name='email' placeholder='Your Email...' className="rounded-sm block bg-black text-white border border-slate-100 w-96 md:w-120 mt-5 p-3"/> 
        </div>
        <div className='mt-3'>
          <textarea name='message' placeholder='Your Message...' className="rounded-sm block bg-black text-white border border-slate-100 w-96 md:w-120 mt-5 p-3"/> 
        </div>
        <div className='mt-10'>
          <button className='bg-slate-600 border border-slate-100 p-5 rounded-md w-36'>Send</button>
        </div>
      </div>
    </form>
  );
}

export default Contacts;

