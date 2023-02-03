import {React,useEffect,useState} from 'react'
// import { useMutation } from 'react-query'
import { useDispatch, useSelector } from "react-redux";
import { insertHotel } from "./../../store/cartSlice";

const Modal = ({ hotel }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [hotelId, setHotelId] = useState('')
  const [hotelname, setHotelname] = useState('')
  const [hotelImg, setHotelImg] = useState('')
useEffect(() => {
  setHotelId(hotel.id)
  setHotelname(hotel.name);
  setHotelImg(hotel.hotelImg)
}, []);

  function createPost() {
    console.log("add cart",cart);
    dispatch(
      insertHotel({
        id: hotelId,
        name: hotelname,
        hotelImg:hotelImg
      }),
    )
  }
  return (
    <><input type="checkbox" id={hotel.id} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor={hotel.id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{hotel.name}</h3>
          <p className="py-4">You've been </p>
          <button type='button' className='btn' onClick={ createPost} > Book</button>
      </div>
    </div></>
  )
}

export default Modal