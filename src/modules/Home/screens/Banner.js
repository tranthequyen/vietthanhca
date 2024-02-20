import { test } from "@/axios/test";
import Cardz from "@/components/Card";
import { Carousel } from "primereact/carousel";
import React, { useEffect, useState } from "react";
function Banner() {
  const itemTemplate = (item) => {
    return (
      <img
        src="https://picsum.photos/200/300"
        alt={item.alt}
        style={{ width: "100%", height: "200px" }}
      />
    );
  };
  return (
    <div>
      <Carousel
        value={test.map((d) => d.url)}
        itemTemplate={itemTemplate}
      ></Carousel>
    </div>
  );
}

export default Banner;
