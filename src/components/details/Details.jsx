import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gethotel } from "./../../store/hotelSlice";
import Loading from "../loading/Loading";

import "./details.css";
const Details = () => {
  const [page, setpage] = useState(1);
  const [hotelpopular, sethotelpopular] = useState("popular");
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(gethotel(id))
      .unwrap()
      .then((data) => console.log(data));
  }, [id]);
  const { isLoading, hotels, hotelInfo } = useSelector((state) => state.hotels);

  const history = useNavigate();
  const handelClick = () => {
    history("/");
  };

  return (
    <div className="hotel-details mx-auto  min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {hotelInfo && (
            <>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${hotelInfo.cover})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
                key={hotelInfo.id}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content flex-col text-neutral-content lg:flex-row">
                    





                    <div className="basis-1/2">
                    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img   src={`${hotelInfo.hotelImg}`} className="w-full rounded-lg shadow-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img   src={`${hotelInfo.hotelImg2}`} className="w-full rounded-lg shadow-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img   src={`${hotelInfo.hotelImg3}`} className="w-full rounded-lg shadow-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

                  </div>

                      
                    </div>
                    <div className="basis-1/2">
                    <div>
                    <h1 className="text-5xl font-bold">{hotelInfo.name}</h1>
                    <h1 className="text-3xl font-bold ">{hotelInfo.brand}</h1>
                    <p className="py-6"> Rank {hotelInfo.displayRank}</p>
                    <p className="py-6"> Rank {hotelInfo.des}</p>

                    <div className="flex flex-col  justify-center px-2">
                          <div className="stat-value text-2xl">
                          Guest Rating  {hotelInfo.overallGuestRating}
                          </div>
                          <div className="stat-value text-2xl">
                          star Rating  {hotelInfo.starRating}
                          </div>
                          <div className="stat-desc">
                            {hotelInfo.vote_count}
                          </div>

                  
                    </div>

                    <div className="flex justify-center gap-1 py-5">
                      {" "}
                      <button
                        className="btn border-0 bg-gray-600 text-white "
                        onClick={handelClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                          />
                        </svg>
                      </button>
                      <button className=" btn   border-0 bg-emerald-500 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>


                    </div>
               




                 
                </div>
                {/*  */}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Details;
