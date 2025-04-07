import React from 'react'
import Button from './Button'

const WelcomeBanner = () => {
    return (
        <section>
            {/* Banner */}
            <div className='sm:flex-row flex-col bg-sky flex justify-between m-4 rounded-xl p-3 bg-gradient-to-r from-green to-navyblue gap-2'>
                <div className='text-3xl text-white font-semibold'>EMPLOYERS</div>
                <div className='hidden sm:block flex text-white font-bold text-lg items-center'>WELCOME OFFER - FREE JOB Posting and much more.</div>
                <div className='flex sm:flex-row flex-col gap-5 text-xs sm:text-sm'>
                    {/* <button className='bg-yellow hover:text-white px-4 py-1 rounded font-semibold'>Register for FREE</button>
                <button className='bg-white px-4 py-1 rounded font-semibold'>Post a Job</button> */}
                    <div className='flex gap-5'>
                        <Button text={"Register for FREE"} textColor={""} bgColor={"bg-yellow"} hoverText={"text-white"} hoverBg={""} />
                        <Button text={"Post a Job"} bgColor={"bg-white"} />
                    </div>
                    <p className='flex items-center underline text-white cursor-pointer'>Sales Inquiry</p>

                </div>
            </div>

            {/* Headline */}
            <div className='flex flex-col  items-center'>
                <p className='text-navyblue font-bold text-xl'>BRINGING YOU THE PERFECT JOB !</p>
                <p className='text-navyblue font-semibold text-lg'>11,000+ JOBS to Apply</p>
            </div>

            {/* Boxes */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 my-5 mx-10'>
                <div className='bg-sky rounded-xl flex flex-col gap-2 col-span-1 items-center justify-center p-10 '>
                    <div className='flex gap-2'>
                        <input className='bg-white sm:w-md sm:py-1 rounded sm:px-4' type='text' placeholder='Search jobs now' />
                        <Button text={"Search"} bgColor={"bg-yellow"} />
                    </div>
                    <div className='flex gap-2'>
                        <Button text={"View Jobs"} bgColor={"bg-white"} />
                        <Button text={"Register For FREE"} bgColor={"bg-yellow"} hoverText={"text-white"} />
                    </div>
                </div>
                <div className='bg-sky col-span-1 p-5 rounded-xl flex flex-col items-center gap-2'>
                    <h1 className='text-navyblue text-xl font-bold'>Quick Job Search</h1>
                    <div className='flex flex-wrap gap-3 text-white text-sm'>
                        <p>#Fresher</p>
                        <p>#Work</p>
                        <p>#WFH</p>
                        <p>#IT</p>
                        <p>#HR</p>
                        <p>#Back Office</p>
                        <p>#BPO Jobs</p>
                        <p>#ITES</p>
                        <p>#Finance</p>
                        <p>#Accounts</p>
                        <p>#Medical</p>
                        <p>#Pharma</p>
                        <p>#Manager</p>
                        <p>#Developer</p>
                        <p>#Marketing</p>
                        <p>#Engineering</p>
                        <p>#Non Government Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeBanner
