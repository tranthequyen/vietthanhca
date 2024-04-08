import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

export const Cardz = ({ src, song, sing, link }) => {
  const header = (
    <div className="container">
      <img
        alt="Card"
        style={{ width: "95%" }}
        className=" image_overlay"
        src={src}
      />
      <div className="overlay"></div>
      <div className="play child">
        {/* <Avatar
          className=""
          icon="pi pi-play"
          style={{ color: "#000000", fontSize: "30px" }}
        /> */}
        <span
          className="pi pi-heart "
          style={{
            fontSize: "25px",
            marginRight: "35px",
          }}
        ></span>
        <span
          className="pi pi-play"
          style={{
            fontSize: "30px",
            border: "2px solid white",
            padding: "10px 10px 10px 12px",
            borderRadius: "50%",
          }}
        ></span>
        <span
          className="pi pi-ellipsis-h "
          style={{
            fontSize: "25px",
            marginLeft: "35px",
          }}
        ></span>
      </div>
    </div>
  );
  const subTitle = () => {
    return (
      <a style={{ color: "#656565", textDecoration: "none" }} href={link}>
        {sing}
      </a>
    );
  };
  return (
    <div>
      <Card
        className="card_hover"
        title={song}
        header={header}
        subTitle={subTitle}
        style={{ backgroundColor: "#111111" }}
      ></Card>
    </div>
  );
};
export const Cards = ({ src, song, sing, link }) => {
  const header = (
    <div class="container">
      <img
        alt="Card"
        style={{ width: "95%" }}
        className=" image_overlay"
        src={src}
      />
      <div class="overlay"></div>
      <div className="play child">
        {/* <Avatar
          className=""
          icon="pi pi-play"
          style={{ color: "#000000", fontSize: "30px" }}
        /> */}
        <span
          className="pi pi-heart "
          style={{
            fontSize: "25px",
            marginRight: "20px",
          }}
        ></span>
        <span
          className="pi pi-play"
          style={{
            fontSize: "25px",
            border: "2px solid white",
            padding: "10px 10px 10px 12px",
            borderRadius: "50%",
          }}
        ></span>
        <span
          className="pi pi-ellipsis-h "
          style={{
            fontSize: "25px",
            marginLeft: "20px",
          }}
        ></span>
      </div>
    </div>
  );
  const subTitle = () => {
    return (
      <a style={{ color: "#656565", textDecoration: "none" }} href={link}>
        {sing}
      </a>
    );
  };
  return (
    <div>
      <Card
        className="card_hover"
        title={song}
        header={header}
        subTitle={subTitle}
        style={{ backgroundColor: "#111111" }}
      ></Card>
    </div>
  );
};
