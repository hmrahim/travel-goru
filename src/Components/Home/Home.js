import React from "react";
import TourCard from "../TourCard/TourCard";
import "./Home.css"


const Home = () => {
  return (
  <div className="container home-container">
   <div className="row mt-5 ">
   <div className="col-md-4  ">
          <h1 className="text-uppercase text-white text-bold fs-1">Cox's bazar</h1>
          <p className="fs-6 text-white">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
          <button className="btn btn-warning">Booking</button>

      </div>
      <div className="col-md-8 ">
        <div className="row">
       
        
         <TourCard title="Sajek Vheli" image="images/Sajek.png"></TourCard>
         <TourCard title="Srimangle" image="images/sreemongol.png"></TourCard>
         <TourCard title="Sondorban" image="images/sundorbon.png"></TourCard>
        </div>

      </div>
   </div>

      
  </div>);
};

export default Home;
