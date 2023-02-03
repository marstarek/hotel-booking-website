import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import {useQuery } from 'react-query'
import {getData} from '../../store/data_provider'
export default function Slider() {
  const { isLoading, error, data: hotels } = useQuery('slideData', getData);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper mb-6 "
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        {hotels? hotels.map((hotel) => (
              <SwiperSlide key={hotel.id}
                style={{
                  backgroundImage: `url(${hotel.cover})`,
                  "backgroundRepeat": "no-repeat",
                  "backgroundSize": "cover",
                  "backgroundPosition": " center",
                }}
            >
                <div
                  className="title font-bold text-white-500 "
                  data-swiper-parallax="-300"
                >
                  {hotel.name}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {hotel.brand}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>{hotel.overallGuestRating}</p>
                </div>
                <div className="button" data-swiper-parallax="-100">
                  <Link className="show_details" to={`/Details/${hotel.id}`}>
                    <button className="btn btn-circle border-0 bg-emerald-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          : "no data"}
      </Swiper>
    </>


    
    
    
  );
}
