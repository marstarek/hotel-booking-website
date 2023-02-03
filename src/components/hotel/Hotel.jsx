import React, { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

const Hotel = ({ hotel }) => {


  function starRating(score) {
    const stars = useMemo(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <=  Math.round(score)? <input  name="rating-2" className="mask mask-star-2 border-0 bg-orange-400" /> :<input  name="rating-2" className="mask mask-star-2 border-0 bg-gray-400" /> );
    }   
    return stars;
  }, [score]);
  return stars.map((el,i) => <span key={i} >{el}</span>);
}
  return (
       <div className="w-50 card bg-base-100 shadow-xl" key={hotel.id}>
            <Modal hotel={hotel} />

                <figure>
                  <img
                    src={`${hotel.hotelImg}`}
                    alt="hotel"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{hotel.name}</h2>

                  <div className="card-actions   items-center">
                    <div className="badge badge-outline">
                      language {hotel.id}
                    </div>
                    <div className="badge badge border-0 bg-emerald-500">
                      {hotel.brand}{" "}
                    </div>
                  
                    <Link className="show_details" to={`/Details/${hotel.id}`}>
                      <button className="btn btn-circle border-0  bg-emerald-500">
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </Link>
                    <div className="">
                      <p> {hotel.totalReviewCount} Review</p>

           
          </div>
          <div className="avatar">
  <div className="w-8 rounded">
    <img src={`${hotel.flag}`} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
         
          <div className="rating">
          {
            starRating(   hotel.starRating)
            }
            
            {
          hotel.starRating
            }
            

</div>
                  </div>
            </div>
            <label htmlFor={hotel.id} className="btn">Book Now</label>

              </div>
  )
}

export default Hotel