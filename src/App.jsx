import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./views/home/Home"
import Details from "./components/details/Details";
import Booked from "./components/booked/Booked";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
 
   
      <BrowserRouter>
        









        
      <Navbar/> 
         <Routes>
           <Route path="/"  element={<Home/>} />
           <Route path="/Details/:id"  element={<Details/>} />
           <Route path="/booked"  element={<Booked/>} />
           </Routes>
           </BrowserRouter>
       
   
   
   
   </QueryClientProvider>
  );
}

export default App;
