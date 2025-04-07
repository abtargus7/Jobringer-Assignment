
const Download = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between sm:px-30 sm:pt-10 sm:mx-5">
        <div className="flex flex-col gap-3 justify-center pl-20">
            <h1 className="text-lg sm:text-3xl">APPLY TO JOBS ON-THE-GO</h1>
            <p className="text-navyblue text-2xl">Jobringer Mobile App</p>
            <div className="flex flex-col sm:flex-row sm:w-full w-1/2 gap-2">
                <img src="https://www.jobringer.com/images/anroid.png" alt="" />
                <img src="https://www.jobringer.com/images/ios.png" alt="" />
            </div>
            <h1 className="text-3xl font-bold">Mobile App <span className="text-blue">Download</span></h1>
        </div>
        <div className="hidden sm:block sm:aspect-square flex justify-end flex-col">
            <img className="h-80" src="/public/jobringer-mobile.png" alt="" />
        </div>
    </section>
  )
}

export default Download
