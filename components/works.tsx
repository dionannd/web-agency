import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";
import workList from "../constants/dummy/work.json";

const Works = () => (
  <TileWrapper numOfPages={workList?.length}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      {workList?.map((work, idx) => (
        <Tile
          key={idx}
          page={work.page}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>{work.header}</div>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                  <WorkLink href={work.link}>{work.namelink}</WorkLink>
                  {work.endTitle}
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src={work.src}
                  layout="responsive"
                  width={work.width}
                  height={work.height}
                  alt={work.alt}
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      ))}
    </TileContent>
  </TileWrapper>
);

export default Works;
