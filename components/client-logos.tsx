import Image from "next/image";
import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import listTrusted from "../constants/dummy/trusted.json";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="mb-4" contentWidth={1290} initialOffsetX={0}>
      {listTrusted?.map((item, index) => (
        <SliderItem width={item.width} key={index}>
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            objectFit="contain"
          />
        </SliderItem>
      ))}
    </SliderContainer>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      {listTrusted
        ?.map((item, index) => (
          <SliderItem width={item.width} key={index}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              objectFit="contain"
            />
          </SliderItem>
        ))
        .reverse()}
    </SliderContainer>
  </>
);

export default ClientLogos;
