import { test } from "@/axios/test";
import Cardz from "@/components/Card";
import { Carousel } from "primereact/carousel";
import React, { useEffect, useState } from "react";
function Banner() {
<<<<<<< HEAD
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
=======
      const itemTemplate = (item) => {
            return (
                  <img className='border-round-lg' src="https://picsum.photos/200/300" alt={item.alt} style={{ width: '100%', height: '300px' }} />
            );
      }
      return (

            <div className='grid' >
                  <div className="col-3 ">
                        <img className='border-round-lg' src="https://picsum.photos/200/300" style={{ width: '100%', height: '300px' }} />
                  </div>
                  <div className="col-9">
                        <Carousel value={test.slice(0, 3).map(d => d.url)} itemTemplate={itemTemplate}></Carousel>

                  </div>

            </div>

      )
>>>>>>> 57e6f999c5b5cb21630e906e0dcd7ab626136c3d
}

export default Banner;
