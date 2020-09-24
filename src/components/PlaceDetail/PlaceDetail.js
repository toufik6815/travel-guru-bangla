import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const PlaceDetail = () => {
  const { placeDetails } = useParams();
  return (
    <div className="home-content">
      <h1 style={{ color: "#fff" }}> This is {placeDetails}</h1>
    </div>
  );
};

export default PlaceDetail;
