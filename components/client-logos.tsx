import Image from "next/image";
import React from "react";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
      </SliderItem>
      <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
      </SliderItem>
      <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
     </SliderItem>
     <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
     </SliderItem>
     <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
     </SliderItem>
     <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
     </SliderItem>
     <SliderItem width={150}>
        <Image 
        src="/assets/trustedby/coinbase.webp"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />  
     </SliderItem>
    </SliderContainer>
  </>
)

export default ClientLogos
