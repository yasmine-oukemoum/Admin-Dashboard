import React from 'react'

const Instructor = () => {
  return (
    <section className="bg-lala2 dark:bg-black overflow-hidden relative">
      {/* Heading section */}
      <div>
        <h1 className='text-center space-y-4 p-6 font-cursive mx-auto mb-5 text-gray-500 text-3xl font-bold'>
        Your Path to Success with Leading Experts
        </h1>
      </div>
      
      {/* Instructors section */}
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 overflow-x-auto min-h-[300px]">
        <div>
          <h1 className="text-primary text-center text-3xl uppercase font-bold">Sarah Lawson</h1>
          <p>AI Specialist with a focus on deep learning and neural networks, known for making complex concepts easy to understand.</p>
        </div>
        <div>
          <h1 className="text-primary text-center text-3xl uppercase font-bold">Michael Reed</h1>
          <p>Cybersecurity expert with 10 years of experience in ethical hacking and threat analysis.</p>
        </div>
        <div>
          <h1 className="text-primary text-center text-3xl uppercase font-bold">Emily Turner</h1>
          <p>Machine Learning engineer skilled in building predictive models and teaching data science fundamentals.</p>
        </div>
        <div>
          <h1 className="text-primary text-center text-3xl uppercase font-bold">David Cooper</h1>
          <p>Network security professional specializing in penetration testing and cloud security strategies.</p>
        </div>
      </div>
    </section>
  )
}

export default Instructor
