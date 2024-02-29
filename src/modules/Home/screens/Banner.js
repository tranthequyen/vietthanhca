import { test } from '@/axios/test';
import Cardz from '@/components/Card';
import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react'
function Banner() {
      const itemTemplate = (item) => {
            console.log(item);
            return (
                  <img className='border-round-lg' src={item} alt={item.alt} style={{ width: '100%', height: '300px' }} />
            );
      }
      return (

            <div className='grid' >
                  <div className="xl:col-3 hidden xl:block">
                        <img className='border-round-lg' src="https://hinhconggiao.com/images/tranh-me-maria/maria-29.jpg" style={{ width: '100%', height: '300px' }} />
                  </div>
                  <div className="col-12 xl:col-9">
                        <Carousel value={test.slice(0, 3).map(d => d.url)} itemTemplate={itemTemplate}></Carousel>

                  </div>

            </div>

      )
}

export default Banner
