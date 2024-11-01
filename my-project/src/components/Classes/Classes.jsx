import React from 'react';

const Classes = () => {
  return (
    <div>
      <section className='bg-light dark:bg-black overflow-hidden py-16 relative'>
        {/* Heading section */}
        <div>
          <h1 className='text-center space-y-4 p-6 font-cursive mx-auto mb-5 text-gray-500 text-3xl font-bold'>
            Best Courses Just for You
          </h1>
        </div>
        
        {/* Classes section */}
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* AI section */}
          <div className='text-center'>
            <h1 className='text-primary text-3xl uppercase font-bold'>
              AI Courses
            </h1>
            <div className='grid grid-cols-1 gap-4 mt-4'>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Introduction to AI</h2>
                <p>
                  Dive into the world of artificial intelligence with this foundational course, perfect for beginners.
                </p>
              </div>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Machine Learning Basics</h2>
                <p>
                  Learn the basics of machine learning and how to apply them in real-world scenarios.
                </p>
              </div>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Deep Learning Fundamentals</h2>
                <p>
                  Explore the concepts of neural networks and deep learning techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Cyber Security section */}
          <div className='text-center'>
            <h1 className='text-primary text-3xl font-bold'>Cyber Security</h1>
            <div className='grid grid-cols-1 gap-4 mt-4'>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Network Security Essentials</h2>
                <p>
                  Understand the principles of network security and how to protect your systems.
                </p>
              </div>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Ethical Hacking</h2>
                <p>
                  Learn ethical hacking techniques to safeguard your organization from cyber threats.
                </p>
              </div>
              <div className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>Cyber Threat Defense</h2>
                <p>
                  Develop skills to effectively defend against cyber threats and attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
