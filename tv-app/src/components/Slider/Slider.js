import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './style.module.css';

const Slider = ({ slides = [], setBannerData, setPlay, orderBy }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1500: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
      }}
    >
      {slides
        .sort((a, b) => orderBy.indexOf(b.Id) - orderBy.indexOf(a.Id))
        .map((item) => (
          <SwiperSlide
            key={item.Id}
            onClick={() => {
              setBannerData(item);
              setPlay(false);
            }}
            className={style.slider_item}
          >
            <img
              className={style.slider_image}
              src={`../../assets/${item.CoverImage}`}
              alt={`movie-${item.Id}`}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
