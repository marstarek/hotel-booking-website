import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function Trend({ hotels }) {
  const [num, setNum] = useState(0);

  function randomNumberInRange() {
    return Math.floor(Math.random() * (20 + 1)) + 1;
  }

  return (
    <>
    

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper my-8"
      >
        {hotels
          ? hotels.map((hotel) => (
              <SwiperSlide
                key={hotel.id}
                style={{
                  backgroundImage: `url(${hotel.hotelImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              >
                <div
                  className="title font-bold text-emerald-500 "
                  data-swiper-parallax="-300"
                >
                  {hotel.name}
                </div>
                <div
                  className="w-100 border-12 text-xxl radial-progress border-emerald-500 bg-emerald-500 text-primary-content"
                  style={{ "--value": hotel.overallGuestRating * 10 }}
                >
                  {hotel.overallGuestRating * 10}
                </div>
              </SwiperSlide>
            ))
          : "no data"}
      </Swiper>
    </>
  );
}

export default Trend;
