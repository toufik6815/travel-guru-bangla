import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const PlaceBox = (props) => {
  const { title, imgUrl, description, id } = props.room;

  const room = [
    {
      title: "COXS BAZAR",
      description:
        "Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.It is famous mostly for its long natural sandy beach, and it ...",
      imgUrl:
        "https://images.unsplash.com/photo-1544550581-1bcabf842b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 1,
      capacity: 1,
    },
    {
      title: "SREEMANGAL",
      description:
        "Superior Double Rooms are perfectly equipped for traveling couples or friends.",
      imgUrl:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 2,
      capacity: 2,
    },
    {
      title: "SUNDERBANS",
      description:
        " Have lots of in-room facilities and are designed in open-concept living area.",
      imgUrl:
        "https://images.unsplash.com/photo-1553054366-ebbf4296eb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 3,
      capacity: 4,
    },
  ];

  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/placeDetail/${id}`);
  };

  return (
    <div className="place-item">
      <Link to={`/detail/${room.id}`} onClick={() => handleClick(room.id)}>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
      </Link>
      
    </div>
  );
};

export default PlaceBox;
