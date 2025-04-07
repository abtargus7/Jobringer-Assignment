import React from 'react'

const Footer = () => {
    return (
        <section className='flex flex-col'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 border-b-2 border-navyblue'>
                <div className='col-span-1 bg-skylight flex flex-col items-center gap-2 p-5' >
                    <h1 className='text-2xl sm:text-3xl font-semibold'>JOBS IN INDIA</h1>
                    <div className='flex flex-wrap gap-2 sm:ap-5 sm:text-lg'>
                        <p>#Mumbai</p>
                        <p>#Delhi</p>
                        <p>#Ajmer</p>
                        <p>#Pune</p>
                        <p>#Hyderabad</p>
                        <p>#Agra</p>
                        <p>#Chennai</p>
                        <p>#Kolkata</p>
                        <p>#Indore</p>
                        <p>#Gurugram</p>
                        <p>#Jaipur</p>
                        <p>#Ahmedabad</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-2 bg-skylight items-center p-5'>
                    <h1 className=' text-2xl sm:text-3xl font-semibold'>INTERNATIONAL JOBS</h1>
                    <div className='flex flex-wrap gap-2 sm:gap-5 sm:text-lg'>
                        <p>#Africa</p>
                        <p>#USA</p>
                        <p>#UK</p>
                        <p>#Australia</p>
                        <p>#Canada</p>
                        <p>#Singapore</p>
                        <p>#Dubai</p>
                        <p>#Saudi Arabia</p>
                        <p>#New Zeland</p>
                    </div>
                </div>
            </div>
            <div className='bg-skylight p-5 border-b-2 border-navyblue '>
                <div className='sm:w-2/3 flex gap-2 m-auto justify-between'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-bold text-xs sm:text-lg'>Jobs Posted</p>
                        <p className='text-navyblue sm:text-4xl font-bold'>38223</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-bold text-xs sm:text-lg'>Jobs Filled</p>
                        <p className='text-navyblue sm:text-4xl font-bold'>15153</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-bold text-xs sm:text-lg'>Employers</p>
                        <p className='text-navyblue sm:text-4xl font-bold'>24058</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-bold text-xs sm:text-lg'>Active Users</p>
                        <p className='text-navyblue sm:text-4xl font-bold'>1475492</p>
                    </div>
                </div>
            </div>
            <div className='bg-skylight border-b-1 border-navyblue'>
                <div className='w-2/3 flex flex-col m-auto p-5 gap-3'>
                    <div className='hidden sm:flex'>
                        <div>
                            <p className='text-base/5'>
                                <span className='font-bold'>Disclaimer:</span> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p>Recognized By</p>
                            <img src="https://www.jobringer.com/images/startuplogo.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        <p className='font-semibold'>Follow us on</p>
                        <img className='w-8' src="/public/whatsapp.png" alt="" />
                        <img className='w-8' src="/public/facebook.png" alt="" />
                        <img className='w-8' src="/public/twitter.png" alt="" />
                        <img className='w-8' src="/public/instagram.png" alt="" />
                        <img className='w-8' src="/public/linkedin.png" alt="" />
                        <img className='w-8' src="/public/youtube.png" alt="" />
                        <img className='w-8' src="/public/telegram.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center bg-skylight text-sm'>
                <ul className='flex gap-2 flex-col sm:flex-row'>
                    <li>Terms and conditions |</li>
                    <li>Privacy Policy |</li>
                    <li>Refund / Cancellation Policy |</li>
                    <li>About Us   |</li>
                    <li>Contact Us| </li>
                    <li>FAQ |</li>
                    <li>Blogs |</li>
                </ul>
                <p className='hidden sm:block'>All rights reserved @ 2025 Jobtech Ventures Private Limited.</p>
            </div>
        </section>
    )
}

export default Footer
