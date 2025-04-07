import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full top-0 z-50 bg-white flex gap-3 sm:gap-10 items-center px-5 font-sm justify-between py-2 shadow-lg/20'>
            <div className=''>
                <img
                    className='h-14 ' 
                    src='https://www.jobringer.com/images/logonew.svg' 
                    alt='' />
            </div>
            <div className='hidden sm:flex font-medium'>
                <div>
                    <ul className='flex gap-5'>
                        <li className='hover:bg-blue hover:text-white py-1 px-4 cursor-pointer'>Jobs</li>
                        <li className='hover:bg-blue hover:text-white py-1 px-4 cursor-pointer'>Active Employers</li>
                        <li className='hover:bg-blue hover:text-white py-1 px-4 cursor-pointer'>Job Blogs</li>
                        <li className='hover:bg-blue hover:text-white py-1 px-4 cursor-pointer'>Pricing</li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='border hover:border-none border-gray-400 px-4 py-1 rounded hover:bg-yellow'>Jobseeker Login</button>
                    <button className='px-4 py-1 hover:text-white rounded bg-yellow hover:bg-blue'>Employer Login</button>
                </div>
            </div>
            <div className='sm:hidden text-xs font-bold text-green'>
                <p>11,000+</p>
                <p>Active Jobs</p>
            </div>
        </div>
    )
}

export default Navbar
