import React,{useEffect,useState} from 'react'

import Slider from '../../components/slider/Slider'
import FilterSlider from '../../components/filterslider/FilterSlider'
import Trend from '../../components/trend/Trend'
import List from '../../components/list/List'
import { useDispatch, useSelector } from "react-redux";
import { gethotels,gethotel } from "../../store/hotelSlice";

const Home = () => {
  const [page, setpage] = useState(1);
  const [moviepopular, setmoviepopular] = useState("popular");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gethotels({ page, moviepopular }));
    
  }, [dispatch]);
  const { hotels} = useSelector((state) => state.hotels);

     return (
       <>
               
         <Slider  /> 
         <FilterSlider />
         <Trend hotels={hotels}/>
         <List />


       </>

  )
}

export default Home