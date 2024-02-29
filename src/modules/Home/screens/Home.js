import { clientApi } from '@/axios'
import { test } from '@/axios/test'
import Cardz from '@/components/Card'
import Card from '@/components/Card'
import Title from '@/components/Title'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import TrendRegular from './TrendRegular'


import ads from '@/layout/img/ads.png'
import NewRelease from './NewRelease'
import Images from './Images'
import Partner from './Partner'
import '../index.css'

function Home() {
    return (
        <>

            <div >
                <Banner />
            </div>
            <div className="grid">
                <div className="col-12 xl:col-9">
                    <Title title="Mùa chay" icon='pi-angle-double-right' subTitle="Xem thêm" />
                    <div className="grid ">
                        {
                            test.slice(0, 8).map(d =>
                                <div className="col-6 md:col-4 lg:col-3 ">
                                    <Cardz song="Cảm mến ân tình" src={d.url} sing="Thế Quyền" />
                                </div>
                            )
                        }
                    </div >
                </div>
                <div className=" xl:col-3 hidden xl:block">
                    <TrendRegular />
                </div>
            </div>
            <div className="grid ">
                <div className=" col-12 xl:col-9">
                    <Title title="Mùa chay" icon='pi-angle-double-right' subTitle="Xem thêm" />
                    <div className="grid">
                        {
                            test.slice(0, 8).map(d =>
                                <div className="col-6 md:col-4 lg:col-3">
                                    <Cardz song="Cảm mến ân tình" src={d.url} sing="Thế Quyền" />
                                </div>
                            )
                        }
                    </div >
                </div>
                <div className="xl:col-3 relative hidden xl:block">
                    <div className="bg-ads"></div>
                    <div className="bg-adsv2"></div>
                    <img src={ads} width={'100%'} alt="" className='absolute' style={{ right: "20px", top: "0", maxWidth: "calc(100% - 20px)", maxHeight: "100%" }} />
                </div>

            </div>
            <NewRelease />
            <Images />
            <div className="grid">
                <div className="col-12 xl:col-9" style={{ margin: '0 auto' }}>
                    <Title title="Bài đọc" icon='pi-angle-double-right' subTitle="Xem thêm" />
                    <div className="grid">
                        {
                            test.slice(0, 8).map(d =>
                                <div className="col-6 lg:col-3">
                                    <Cardz song="Cảm mến ân tình" src={d.url} sing="Thế Quyền" />
                                </div>
                            )
                        }
                    </div >
                </div>
                <div className="xl:col-3 hidden xl:block">
                </div>
            </div>

        </>
    )
}

export default Home