import Image from "next/image";
import React from "react";
import SliderContainer from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <Image 
        src={}
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />
    </SliderContainer>
  </>
)

export default ClientLogos
