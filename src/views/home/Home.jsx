import React,{useEffect,useState} from 'react'

import Slider from '../../components/slider/Slider'
import FilterSlider from '../../components/filterslider/FilterSlider'
import List from '../../components/list/List'
import { useDispatch, useSelector } from "react-redux";
import { gethotels,gethotel } from "../../store/hotelSlice";
import {useQuery } from 'react-query'
import { getData } from '../../store/data_provider'
import { modalState } from "./../../store/modalSlice";
import Alert from '../../components/alert/Alert';

const Home = () => {
  const { isLoading, error, data: hotelsList } = useQuery('hotelsList', getData)
  const [alert, setAlert] = useState(false);
  const {isOpen} = useSelector((state) => state.modalAlert || {});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gethotels());
    
  }, [dispatch]);



  const { hotels} = useSelector((state) => state.hotels);

     return (
       <>
         {
           isOpen?<Alert/>: ""
         }  
         <Slider  /> 
         <FilterSlider hotels={hotels} isLoading={isLoading} />
         <List hotelsList={hotelsList} isLoading={isLoading}  />


       </>

  )
}

export default Home