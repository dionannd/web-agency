import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";
import testimoniList from "../constants/dummy/testimonial.json";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="bg-black text-white py-10 lg:py-20">
      {testimoniList?.map((testi, idx) => (
        <CarouselItem index={testi.index} key={idx}>
          <Review by={testi.name}>{testi.review}</Review>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Testimonials;
