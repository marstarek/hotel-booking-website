import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

const Hotel = ({movie}) => {
  return (
       <div className="w-50 card bg-base-100 shadow-xl" key={movie.id}>
            <Modal movie={movie} />

                <figure>
                  <img
                    src={movie.image}
                    alt="movie"
                  />
                </figure>
                <div className="card-body 	">
                  <h2 className="card-title ">{movie.name}</h2>

                  <div className="card-actions   items-center">
                    <div className="badge badge-outline">
                      language {movie.original_language}
                    </div>
                    <div className="badge badge border-0 bg-emerald-500">
                      {movie.release_date}{" "}
                    </div>
                    <Link className="show_details" to={`/Details/${movie.id}`}>
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
                      <p> vote:{movie.vote_average}/10</p>

                      <progress
                        className="w-25 progress progress-error border-0"
                        value={movie.vote_average}
                        max="10"
                      ></progress>
                    </div>
                  </div>
            </div>
            <label htmlFor={movie.id} className="btn">open modal</label>

              </div>
  )
}

export default Hotel