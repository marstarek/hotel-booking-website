import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getList } from "../../store/data_provider";
import Loading from "../loading/Loading";
import Hotel from "../hotel/Hotel";
function List(props) {
  const [page, setPage] = useState(1);


  
  // const { isLoading, error, data: char } = useQuery("character", getList);
  return (
    <>
      <h1 className="bg-gradient-to-r from-emerald-800 to-emerald-300  bg-clip-text pb-8 text-center text-7xl font-extrabold text-transparent">
        Top Rated
      </h1>
      <div>
        <div className="xs:grid-cols-1 container mx-auto  grid grid-cols-2 gap-4  px-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {props.isLoading ? (
         <Loading/>
          ) : (
            props.hotelsList &&
            props.hotelsList.map((hotel) => (
              <Hotel hotel={hotel} key={hotel.id}/>
          
            ))
          )}
        </div>

        <div className="my-5  flex justify-center pb-5">
          <div className="btn-group">
            <button
              className="btn"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              «
            </button>
            <button className="btn">{page}</button>
            <button
              className="btn"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
