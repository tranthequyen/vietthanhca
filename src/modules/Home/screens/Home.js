import axios from 'axios'
import { Image } from 'primereact/image'
import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('http://mp3.zing.vn/xhr/recommend', {
    //         params: {
    //             id: 'ZW67OIA0',
    //             type: 'audio'
    //         }
    //     })
    //         .then(res => {
    //             if (res) setData(res.data.data.item)
    //         })
    // }, [])



    return (
        <div className=''>
            <div>
                <h1 className='mx-3'>Danh sách phát trên Spotify</h1>
                <div style={{ flexWrap: 'wrap' }} className='flex p-3 mt-3 gap-3 justify-conten-center'>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>

                </div >
            </div>
            <div>
                <h1 className='mx-3'>Top 100</h1>
                <div style={{ flexWrap: 'wrap' }} className='flex p-3 mt-3 gap-3 justify-conten-center'>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>

                </div >
            </div>
            <div>
                <h1 className='mx-3'>Yêu thích</h1>
                <div style={{ flexWrap: 'wrap' }} className='flex p-3 mt-3 gap-3 justify-conten-center'>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>
                    <div className='hover:surface-400 p-3 flex justify-content-center border-round-md ' style={{ minWidthwidth: "220px" }}>
                        <div className='' style={{ maxWidth: "200px" }} >
                            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="200" height='200' />
                            <h4 className='mt-2'>Dinner with friend</h4>
                            <p style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                overflow: 'hidden'
                            }}>The perfect soundtrack to those long nights over dinner</p>
                        </div>
                    </div>

                </div >
            </div>
        </div >
    )
}

export default Home