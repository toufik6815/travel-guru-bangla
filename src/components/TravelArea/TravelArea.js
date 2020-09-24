import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import "./TravelArea.css";

const TravelArea = (props) => {
  const [showArea, setShowArea] = useContext(userContext);
  const { title, img } = props.place;
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "90%",
    borderRadius: "10px",
    margin: "6px",
    marginTop: "60px",
  };

  const travelAreaHandler = () => {
    setShowArea(props.place);
  };

  return (
    <Grid item xs={12} md={4}>
      <div
        className="travel-area"
        onClick={travelAreaHandler}
        style={backgroundImageStyle}
      >
        <h2
          style={{
            marginTop: "350px",
            textAlign: "center",
            color: "#CCCCCC",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {title}
        </h2>
      </div>
    </Grid>
  );
};

export default TravelArea;
