import { test } from "@/axios/test";
import Cardz from "@/components/Card";
import { Carousel } from "primereact/carousel";
import banner from "../../../Image Thanh Ca/Rectangle 1.png";
import banner1 from "../../../Image Thanh Ca/thanh-giuse.jpg";
import React, { useEffect, useState } from "react";
function Banner() {
  const itemTemplate = (item) => {

    return (
      <div style={{ position: "relative" }}>
        <img
          className="border-round-lg"
          style={{
            width: "100%",
            height: "300px",
          }}
          src={banner}
          alt="Banner"
        />
        <h1
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            margin: "10px",
          }}
        >
          BÀI ĐỌC HÔM NAY
        </h1>
      </div>
    );
  };
  return (
    <div className="grid">
      <div className="xl:col-4 hidden xl:block">
        {/* <img className='border-round-lg' src="https://hinhconggiao.com/images/tranh-me-maria/maria-29.jpg" style={{ width: '100%', height: '300px' }} /> */}
        <div className="album w-full h-full pt-3 flex flex-column">
          <p
            className=" m-0 text-lg"
            style={{
              padding: "1rem 0 0 1rem",
              color: "#2efa82",
              fontWeight: "bold",
            }}
          >
            Album yêu thích
          </p>
          <b
            className="text"
            style={{ margin: "0 auto", padding: "0.8rem", fontSize: "24px" }}
          >
            Bài đọc hôm nay
          </b>
          <img
            className="border-round-lg"
            src={banner1}
            style={{
              width: "100%",
              height: "180px",
              width: "180px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="col-12 xl:col-8">
        <Carousel
          value={test.slice(0, 3).map((d) => d.url)}
          itemTemplate={itemTemplate}
        ></Carousel>
      </div>
    </div>
  );
}

export default Banner;
