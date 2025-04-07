import React from 'react'
import JobCarausel from './JobCarausel'
import EmployersCaraousel from './EmployersCaraousel'

const FeaturedJobs = () => {
  return (
    <section className='flex flex-col gap-5'>
        <h1 className='text-navyblue text-2xl m-auto font-bold'>Featured Jobs</h1>
        <JobCarausel />
        <h1 className=' text-2xl m-auto font-bold'>FEATURED <span className='text-navyblue'>EMPLOYERS</span></h1>
        <EmployersCaraousel />
    </section>
  )
}

export default FeaturedJobs
