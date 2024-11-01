import React from 'react'
import CountUp from 'react-countup'

const NumberConter = () => {
  return (
    <div className='bg-secondary text-white py-12'>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold'>
            <CountUp start={0} end={1000} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Expert tutors</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold'>
          <CountUp start={0} end={1000} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Hours Content</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold'>
          <CountUp start={0} end={1000} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Courses</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-semibold'>
          <CountUp start={0} end={1000} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Active Students</p>
        </div>
      </div>

    </div>
  )
}

export default NumberConter