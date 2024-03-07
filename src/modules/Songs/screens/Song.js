import { test } from '@/axios/test'
import DataTablez, { Columnz } from '@/components/Datatablez'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

function Song() {
      const menuRight = useRef(null);
      const items = [
            {
                  label: 'Cá nhân',
                  items: [
                        {
                              label: 'Tải xuống',
                              icon: 'pi pi-download'
                        },
                        {
                              label: 'Lời bài hát',
                              icon: 'pi pi-book'
                        },
                        {
                              label: 'Thêm vào danh sách phát',
                              icon: 'pi pi-plus'
                        },
                        {
                              label: 'Phát tiếp theo',
                              icon: 'pi pi-angle-double-right'
                        },
                        {
                              label: 'Sao chép link',
                              icon: 'pi pi-link'
                        },
                        {
                              label: 'Chia sẻ',
                              icon: 'pi pi-share-alt'
                        }
                  ]
            }
      ];
      const [heart, setHeart] = useState(false)
      const handleHeart = () => {
            setHeart(!heart)
      }
      return (
            <div className='px-3'>
                  <DataTablez noAction value={test.slice(0, 17)}>
                        <Columnz header="Bài hát" style={{ width: '40%' }} body={(e) => (
                              <li className='flex align-items-center px-3'>
                                    <img src="https://picsum.photos/200/300" alt="" width="80px" height="80px" className='border-round-lg' />
                                    <div className='flex flex-column justify-content-center p-3 gap-2'>
                                          <Link to="" style={{ color: "#03CE58" }} className='no-underline text-xl'>{e.title}</Link>
                                          <Link to="" className=' text-white no-underline'>Thế Quyền</Link>
                                    </div>
                              </li>
                        )} />
                        <Columnz header="Thời lượng" className="text-center" body={
                              <>
                                    <span className='text-white '>4:30</span>
                              </>
                        } />
                        <Columnz header="Người nghe" />
                        <Columnz header="Tùy chọn" body={
                              <div className='flex gap-3 justify-content-center text-white' >

                                    <Button className='bg-black-alpha-90 border-none' icon={heart ? "pi pi-heart-fill" : 'pi pi-heart'} onClick={handleHeart} />
                                    <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                    <Button className='bg-black-alpha-90 border-none' icon="pi pi-ellipsis-v" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                              </div>
                        } />
                  </DataTablez>

            </div>
      )
}

export default Song
