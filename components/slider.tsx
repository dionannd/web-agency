import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface Props {
  initialOffsetX: number
  className: string
  contentWidth: number
  children: React.ReactNode
}

const SliderContainer: React.FC<Props> = ({ initialOffsetX, className, contentWidth, children}: Props) => {
  const { innerWidth } = useContext(ScrollContext)
  const refScrollX = useRef<number>(initialOffsetX) 
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  return (
    <div ref={refContainer} className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}>
      <div ref={refContent} className="inline-block">
        {children}
      </div>
    </div>
  )
}

export default SliderContainer
