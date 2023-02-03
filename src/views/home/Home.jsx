import React,{useEffect,useState} from 'react'

import Slider from '../../components/slider/Slider'
import FilterSlider from '../../components/filterslider/FilterSlider'
import Trend from '../../components/trend/Trend'
import List from '../../components/list/List'
import { useDispatch, useSelector } from "react-redux";
import { gethotels,gethotel } from "../../store/hotelSlice";
import {useQuery } from 'react-query'
import {getData} from '../../store/data_provider'
const Home = () => {
  const { isLoading, error, data: hotelsList } = useQuery('hotelsList', getData)

  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gethotels({ page}));
    
  }, [dispatch]);
  const { hotels} = useSelector((state) => state.hotels);

     return (
       <>
               
         <Slider  /> 
         <FilterSlider />
         <Trend hotels={hotels}/>
         <List hotelsList={hotelsList} isLoading={isLoading}  />


       </>

  )
}

export default Home