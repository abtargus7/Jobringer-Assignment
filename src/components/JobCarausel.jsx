
import Button from "./Button";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const jobs = [
    {
        title: "Manager Finish Goods Warehouse | Leading Pharma Company",
        location: "Indore | Pithampur / India",
        company: "HINDCO Consulting Services",
        jobType: "Full Time",
        experience: "5 - 10 Years",
    },
    {
        title: "Chartered Accountant | 1 Year Experience | Leading Company",
        location: "Mumbai | Navi Mumbai / Panvel / Pune / India",
        company: "HINDCO Consulting Services",
        jobType: "Full Time",
        experience: "0 - 5 Years",
    },
    {
        title: "Medical Coding jobs for Bio Science Graduation",
        location: "Chennai / Madras / India",
        company: "Nestem Technologies",
        jobType: "Full Time",
        experience: "0 - 1 Years",
    },
    {
        title: "Divisional Merchandising Manager | A Large Fashion Buying House",
        location: "Mumbai / India",
        company: "HINDCO Consulting Services",
        jobType: "Full Time",
        experience: "2 - 3 Years",
    },
    {
        title: "Divisional Merchandising Manager | A Large Fashion Buying House",
        location: "Mumbai / India",
        company: "HINDCO Consulting Services",
        jobType: "Full Time",
        experience: "2 - 3 Years",
    },
    {
        title: "Divisional Merchandising Manager | A Large Fashion Buying House",
        location: "Mumbai / India",
        company: "HINDCO Consulting Services",
        jobType: "Full Time",
        experience: "2 - 3 Years",
    },
];


const JobCarausel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
    };

    return (

        // <div className="relative">
        //     <div className="flex overflow-x-auto gap-4 mx-34">
        //         {jobs.map((job, index) => (
        //             <div
        //                 key={index}
        //                 className="min-w-[300px] border rounded-lg p-4 shadow-md relative"
        //             >
        //                 <span className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl">
        //                     {job.type}
        //                 </span>
        //                 <h3 className="text-lg font-semibold text-blue-700">
        //                     {job.title}
        //                 </h3>
        //                 <p className="text-sm mt-1">{job.company}</p>
        //                 <p className="text-sm mt-1">{job.employment}</p>
        //                 <p className="text-sm mt-1">{job.experience}</p>
        //                 <p className="text-sm mt-1">{job.location}</p>
        //                 <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
        //                     Apply
        //                 </button>
        //             </div>
        //         ))}
        //     </div>

        //     <button
        //         onClick={prevSlide}
        //         className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        //     >
        //         &lt;
        //     </button>
        //     <button
        //         onClick={nextSlide}
        //         className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        //     >
        //         &gt;
        //     </button>
        // </div>
        //   </div >

        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}

                plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                className="sm:w-6xl m-auto "
            >
                <CarouselContent className="-ml-1">
                    {jobs.map((job, index) => (


                        <CarouselItem key={index} className="basis md:basis-1/2 lg:basis-1/4">
                            <div className="p-1 ">
                                <Card>
                                    <CardContent className="flex flex-col justify-center text-sm gap-2 ">
                                    <h1 className="font-bold text-navyblue">{job.title}</h1>
                                    <p className="font-semibold">{job.company}</p>
                                    <div className="text-gray-700 flex flex-col gap-1">
                                        <p>{job.jobType}</p>
                                        <p>{job.experience}</p>
                                        <p>{job.location}</p>
                                    </div>
                                    <Button text={"Apply"} bgColor={"bg-sky"} textColor={"text-white"} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )

}

export default JobCarausel

