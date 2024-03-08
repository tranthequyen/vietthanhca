import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

function Cardz({ src, song, sing, link }) {
  const header = (
    <div class="container">
      <img alt="Card" height="300px" className=" image_overlay" src={src} />
      <div class="overlay"></div>
      <div className="play child">
        <Avatar className="" icon="pi pi-play" style={{ color: "#000000" }} />
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
      ></Card>
    </div>
  );
}

export default Cardz;
