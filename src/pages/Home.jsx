import React from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import FeaturedJobs from '../components/FeaturedJobs'
import Download from '../components/Download'

const Home = () => {
  return (
    <div className='pb-16 pt-20'>
      <WelcomeBanner />
      <FeaturedJobs />
      <Download />
    </div>
  )
}

export default Home
