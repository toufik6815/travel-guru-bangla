import React from "react";
import { Grid } from "@material-ui/core";
import { hotelsInfo } from "../../fakeData/travelInfo";
import HotelDetails from "../HotelDetails/HotelDetails";
import Map from "../Map/Map";

const Destination = () => {
  return (
    <div>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6}>
          <div className="hotel_destination">
            <h2> 18-5 Sep To Sep 20-5 </h2>
            <p>Stay Home Stay Save</p>
            <h3> Stay in Cox's Bazar</h3>
          </div>

          {hotelsInfo.map((hotel) => {
            return <HotelDetails key={hotel.id} hotel={hotel}></HotelDetails>;
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          <Map></Map>
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;
