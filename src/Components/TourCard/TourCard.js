import React from "react";

const TourCard = (props) => {
  return (
    
      <div className="col-md-4">
        <div
          className="card m-2 shadow border-0 "
          style={{ borderRadius: "20px" }}
        >
          <div className=" bg-dark ">
            <img
              className="img-fluid rounded-0"
              src={props.image}
              alt=""
            />
          </div>
          <h3 className="card-title position-absolute bottom-0 text-center text-white ms-5">
            {props.title}
          </h3>
        </div>
      </div>
   
  );
};

export default TourCard;
