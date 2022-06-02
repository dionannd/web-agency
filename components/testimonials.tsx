import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => {
  return (
    <Carousel className='bg-black text-white py-10 lg:py-20'>
      <CarouselItem index={0}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime bot share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team
        </Review> 
      </CarouselItem>
         <CarouselItem index={1}>
        <Review by="Adam Carlton (CEO of Pink Panda)">
          Margelo is a collection of world class talent, from React Native to website, full stack to design - I&apos;ve been nothing but pleased with their communication, imagiation, insight and delivery.
        </Review> 
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Alex (CTO of Steakwallet)">
          The output of Margelo is unline any other team we&apos;ve worked with. Their speed, professionalism and familiarity with all things mobile helped turn Steakwallet into the slick application it is known as today.   
        </Review> 
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Clinton (CEO of Slingshot)">
          Working with the Margelo team feels like a cheat code. When it comes to building performant and scalable React Native mobile apps, they&apos;re the best hands down.   
        </Review> 
      </CarouselItem>
    </Carousel> 
  )
}

export default Testimonials
