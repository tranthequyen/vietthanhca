import { test } from "@/axios/test";

import Title from "@/components/Title";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import React from "react";

function Card1({ src, song, sing, link }) {
  const header = (
    <div class="container">
      <img alt="Card" className="h-3" src={src} />
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

export default function ImageSongs() {
  return (
    <div className="grid">
      <div className="col-9">
        <div className="grid">
          {test.slice(0, 3).map((d, index) => (
            <div className="col" key={index}>
              <Card1 song="" src="https://picsum.photos/200/300" sing="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
