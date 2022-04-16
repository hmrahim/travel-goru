import React from "react";

const Booking = () => {
  return (
    <div className="container ">
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-start align-items-start flex-column">
          <h1 className="text-uppercase text-white text-bold fs-1">
            Cox's bazar
          </h1>
          <p className="fs-6 text-white">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
        </div>
        <div className="col-md-6">
            <form action="" className="bg-white p-3">
              <div className="form-group d-flex flex-column">
                <label htmlFor="" className="">Origgin</label>
                <input type="text" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              <div className="form-group d-flex flex-column">
                <label htmlFor="" className="">Destination</label>
                <input type="text" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              <div className="d-flex ">
              <div className="form-group d-flex flex-column me-2 ">
                <label htmlFor="" className="">From</label>
                <input type="text" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              <div className="form-group d-flex flex-column ms-2">
                <label htmlFor="" className="">To</label>
                <input type="text" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              

              </div>
              <button className="btn btn-warning w-100 my-3">Start Booking</button>
                
            </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
