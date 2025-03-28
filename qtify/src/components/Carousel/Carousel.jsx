import React, { useEffect } from 'react';

// Import Swiper React components and hooks
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselRight/CarouselRight";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";

// By default Swiper React uses core version of Swiper (without any additional modules). 
// If you want to use Navigation, Pagination and other modules, you have to install them first.
import { Navigation } from 'swiper/modules';


const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        //swiper.slideTo(index, speed, runCallbacks(optional))
        swiper.slideTo(0,1)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (

    <div className={styles.wrapper}>
    <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"6"}
         // The Pagination module from Swiper.js is explicitly imported and passed to the modules prop of the Swiper component.
         modules={[Navigation]}
         allowTouchMove
        >
        <Controls data={data}/>
            <CarouselLeft />
         <CarouselRight />
         {/* since we need to show the cards of album inside the section, hence use SwiperSlide inside map on data array */}
      {data.map((item, index) => (
         // renderCardComponent is using the card component in it to show cards, see in section component
        <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
      ))}
       
    </Swiper>
    </div>
  )
}

export default Carousel;

