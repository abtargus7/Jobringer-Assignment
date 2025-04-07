import {useState} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const EmployersCaraousel = () => {

    const [employers, setEmployers] = useState([
       " https://www.jobringer.com/images/content/company-logo/hjp41498bf4685778560f88e8a3f7f0c6ef.png",
       "https://www.jobringer.com/images/content/company-logo/hjpfd1fa29b2d166eabec41b46d52c1151d.png",
       "https://www.jobringer.com/images/content/company-logo/hjpff533b4b91b8a98e8a51fb8e37a9d6c5.png",
       "https://www.jobringer.com/images/content/company-logo/hjp39e9c35c92692e7c0e0b538b5d26f14f.png",
       "https://www.jobringer.com/images/content/company-logo/hjpcf611fe583565ebfb6e9926a4e891be7.png",
       "https://www.jobringer.com/images/content/company-logo/hjpa955db6f1bba463fb45eab2063909538.png",
       "https://www.jobringer.com/images/content/company-logo/hjpe6e56dc691ed1645f70d2e5085d7e83d.png",
       "https://www.jobringer.com/images/content/company-logo/hjp1dc31ade01094a5bf12cba85ad5bbfc8.png",
       "https://www.jobringer.com/images/content/company-logo/hjpbcff132c4bd97908694f346bcfde355b.png",
       "https://www.jobringer.com/images/content/company-logo/hjp9e21543b667e12a373470a08a7cde68c.png",
       "https://www.jobringer.com/images/content/company-logo/hjpfe60b8ff1a593e3c46d4c8a46df9e06e.png",
       "https://www.jobringer.com/images/content/company-logo/hjpd6389d698aab8c2e1f856dbe0285b4a7.png",
       "https://www.jobringer.com/images/content/company-logo/hjp946be22f5a4763a420dc5d02eccccb7e.png",
       "https://www.jobringer.com/images/content/company-logo/hjp208b8b26187780828892ce43c41ae92a.png",
       "https://www.jobringer.com/images/content/company-logo/hjp590e58820ddf7666addd9fa5d23065e9.png",
       "https://www.jobringer.com/images/content/company-logo/hjp014bb4ccc735906bfeeae8c7fbc84e16.png",
       "https://www.jobringer.com/images/content/company-logo/hjp78203cdcffd578e9359c5c90c4933ed0.png",
       "https://www.jobringer.com/images/content/company-logo/hjp6cf84e2b8a323e94d5c72edc7fc4a2c2.png",
       "https://www.jobringer.com/images/content/company-logo/hjp3126e8c298cddd110c1fdbb30f862f6b.png",
       "https://www.jobringer.com/images/content/company-logo/hjpb1d3ad087fc0d801cfdc950c640b2904.png",
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
    };


  return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}

                plugins={[
                    Autoplay({
                      delay: 4500,
                    }),
                  ]}
                className="sm:w-6xl m-auto p-5 "
            >
                <CarouselContent className="">
                    {employers.map((employer, index) => (


                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/8">
                            <div className="">
                                <Card>
                                    <CardContent className="flex flex-col justify-center text-sm  ">
                                        <img src={employer} alt='' />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                
            </Carousel>

        </div>
    )
  
}

export default EmployersCaraousel
