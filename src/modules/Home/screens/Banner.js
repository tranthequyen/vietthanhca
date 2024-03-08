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
            console.log(item);
            return (
                  <img className='border-round-lg' src={item} alt={item.alt} style={{ width: '100%', height: '300px' }} />
            );
      }
      return (

            <div className='grid' >
                  <div className="xl:col-3 hidden xl:block">
                        {/* <img className='border-round-lg' src="https://hinhconggiao.com/images/tranh-me-maria/maria-29.jpg" style={{ width: '100%', height: '300px' }} /> */}
                        <div className='album w-full h-full pt-3 flex flex-column'>
                              <p className=' m-0 text-lg' style={{ padding: '1.5rem 0 0 1rem', color: '#72FFAE' }}>Album yêu thích</p>
                              <b className='text-xl' style={{ padding: '0.5rem 0 1rem 2rem' }}>Bài đọc hôm nay</b>
                              <img className='border-round-lg' src="https://hinhconggiao.com/images/tranh-me-maria/maria-29.jpg" style={{ width: '100%', height: '180px', width: '180px', margin: '0 auto' }} />
                        </div>
                  </div>
                  <div className="col-12 xl:col-9">
                        <Carousel value={test.slice(0, 3).map(d => d.url)} itemTemplate={itemTemplate}></Carousel>

                  </div>

            </div>

      )
>>>>>>> 57e6f999c5b5cb21630e906e0dcd7ab626136c3d
}

export default Banner;
