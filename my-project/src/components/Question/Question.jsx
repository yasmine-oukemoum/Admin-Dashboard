import React from 'react';

const Question = () => {
  return (
    <section className='bg-lala2 dark:bg-black overflow-hidden relative'>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
        {/* Message Side */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
          <p className='text-primary font-bold'>Contact Now!</p>
          <h1 className='text-4xl font-bold mb-6'>Have a Question? Let Us Know</h1>
          
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-4'>
              <input type="text" placeholder='Name' className='border p-3 rounded' />
              <input type="text" placeholder='Subject' className='border p-3 rounded' />
            </div>
            <div className='flex flex-col gap-4'>
              <input type="email" placeholder='Email Address' className='border p-3 rounded' />
              <input type="tel" placeholder='Phone Number' className='border p-3 rounded' />
            </div>
            {/* Full Width Message Input */}
            <div className='col-span-2'>
              <textarea placeholder='Message' className='border p-3 rounded w-full h-32'></textarea>
            </div>
            {/* Submit Button */}
            <div className='col-span-2'>
              <button type='submit' className='bg-primary text-white py-3 px-6 rounded-full'>
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Image Side (Add Image or Placeholder) */}
        <div >
          {/* Insert image here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Question;
