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
import { useDispatch } from 'react-redux'
import { setCurrentSong, setSongActive, setSongState } from '@/redux/currentSong'
import { useGetApi } from '@/hook/useGetApi'
import { getlistSongHome } from '../api'
import { useGetParams } from '@/hook/useGetParams'
import { useListSongHome } from '../utils'
import { setAllSongs } from '@/redux/allSong'
import { useFetchAllSongs } from '@/getAPIredux/utils'


function Home() {
    const dispatch = useDispatch();
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const handleSongClick = (song) => {
        dispatch(setCurrentSong(song));
        dispatch(setSongState(true));
        dispatch(setSongActive(true));
    };
    useFetchAllSongs()
    const data = useListSongHome()
    useEffect(() => {
        dispatch(setAllSongs(data));
    }, [data, dispatch]);
    return (
        <>

            <div >
                <Banner />
            </div>

            <div className='grid py-3'>
                <div className="col-12 lg:col-9">
                    <div className='hidden xl:block'>
                        <Title title="Nghệ sỹ tiêu biểu" icon='pi-angle-double-right' subTitle="Xem thêm" />
                        <div className="flex justify-content-between  ">
                            {test.slice(0, 6).map(d =>
                                <img src={d.url} width='150px' height="150px" style={{ borderRadius: '50%' }} />
                            )}
                        </div>
                    </div>
                    <Title title="Mùa chay" icon='pi-angle-double-right' subTitle="Xem thêm" />
                    <div className="grid ">
                        {
                            data.slice(0, 8).map(d =>
                                <div className="col-6 md:col-4 lg:col-3 p-3 p-3 " onClick={() => handleSongClick(d)}>
                                    <Cardz song={d.name} src="https://hinhconggiao.com/images/tranh-cong-giao-khac/JK-34.jpg" sing={d.composed} />
                                </div>
                            )
                        }
                    </div >
                </div>
                <div className="col-12 lg:col-3">
                    <div className="  hidden xl:block">
                        <TrendRegular />
                    </div>
                </div>

            </div>

            <div className="grid ">
                <div className=" col-12 xl:col-9">
                    <Title title="Mùa chay" icon='pi-angle-double-right' subTitle="Xem thêm" />
                    <div className="grid">
                        {
                            test.slice(0, 8).map(d =>
                                <div className="col-6 md:col-4 lg:col-3 p-3">
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
                                <div className="col-6 lg:col-3 p-3">
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