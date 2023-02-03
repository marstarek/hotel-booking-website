import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "./filterslider.css";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import {useQuery } from 'react-query'
import {getMoviesData} from '../../store/data_provider'
import { Pagination } from "swiper";
import Loading from "../loading/Loading";
export default function FilterSlider() {
  const [pageType, setPageType] = useState(28);
  const { isLoading, error, data:movies } = useQuery('filterData', getMoviesData)

  return (
    <>
            <h1 className='text-center py-3 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-300'>Most Popular Movies</h1>

       <div className=" flex flex-row flex-wrap justify-center py-5   filter-wrapper">
      {" "}
      <div className="basis-1  px-5 py-2 	">
        <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full" onClick={() => { setPageType(28)}}  >Action</button>
      </div>
      <div className="basis-1 px-5 py-2 ">
        <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full " onClick={() => { setPageType(10751)}}>History</button>
      </div>
      <div className="basis-1 px-5 py-2">
          <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full "
          onClick={() => { setPageType(18)}}>Drama</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full" onClick={() => { setPageType(35)}}>Comedy</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full" onClick={() => { setPageType(16)}}>Animation</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-emerald-500 border-0 shadow-sm rounded-full" onClick={() => { setPageType(12)}}>Adventure</button>
      </div>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
     
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="FilterSlider"
      >
         {isLoading ? (
        <Loading/>
        ) : (
            <>
             
              {
                

          movies ? movies.results.filter(movie => movie.genre_ids.includes(pageType)).map((movie) => (

            <SwiperSlide        className='shadow-xl' key={movie.id}
         style={{
            "backgroundImage":
              `url(http://image.tmdb.org/t/p/w500/${movie.poster_path})`,    "backgroundRepeat": "no-repeat",
             "backgroundSize": "cover",
              "backgroundPosition":" center",
          }}
        >
          <div className="">
            <h2 className="text-center font-bold text-transparent text-l text-red-50">  {movie.title}</h2>
            <p>{movie.original_language}</p>
            <div
              className=" flex items-center
    justify-center"
                >

<Link className='show_details'  to={`/Details/${movie.id}`}><button className="btn bg-emerald-500 border-0  btn-circle"
            
            >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </button></Link>

                  

              <div
                className="radial-progress border-4 border-emerald-500 bg-emerald-500 text-xs text-primary-content"
                style={{ "--value": movie.vote_average*10 }}
              >
               {movie.vote_average*10 }
              </div>
            </div>
          </div>
        </SwiperSlide>



            
          )):"no data"
}
            
            
            
            </>
      )}








  
      </Swiper>
    </>
  );
}
