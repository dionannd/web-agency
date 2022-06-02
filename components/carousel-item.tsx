import React, { useContext, useCallback } from 'react'
import { CarouselContext } from './carousel'
import styles from '../styles/carousel.module.css'

interface Props {
  index: number,
  children: JSX.Element
}

const CarouselItem: React.FC<Props> = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div className={`${styles.slide} relative ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  )
}

export default CarouselItem
