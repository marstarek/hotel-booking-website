import {React,useEffect,useState} from 'react'
import { useMutation } from 'react-query'

const Modal = ({ hotel }) => {
  const [hotelId, setHotelId] = useState(hotel.id)
  const [hotelname, setHotelname] = useState(hotel.name)

  const {isLoading, isError, error, mutate} = useMutation(createPost)


  async function createPost() {
    const update = {
      hotelId: hotelId,
      hotelname: hotelname,
      };
   fetch("http://localhost:3001/cart/", {
    method: "POST",
    body: JSON.stringify(update),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
.then(response => response.json())
// Displaying results to console
.then(json => console.log(json,"res"));
  }

  return (
    <><input type="checkbox" id={hotel.id} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor={hotel.id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{hotel.name}</h3>
          <p className="py-4">You've been </p>
          <button type='button' className='btn' onClick={() => {mutate({ hotelId, hotelname })}} > Book</button>
      </div>
    </div></>
  )
}

export default Modal