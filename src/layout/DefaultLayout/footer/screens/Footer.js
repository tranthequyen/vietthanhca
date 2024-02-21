import React from 'react'
import logo from '@/layout/img/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
      return (
            <div className='footer grid  ' >
                  <div className="col-6 pl-8">
                        <div className='flex'>
                              <img width="88px" src={logo} alt="" />
                              <h1>VIETTHANHCA</h1>
                        </div>
                        <div className=''>
                              <p style={{ maxWidth: '370px' }}>Vietthanhca là nguồn nhạc miễn phí bản quyền. Nâng cao dự án của bạn với bộ sưu tập đa dạng của chúng tôi. Đơn giản hóa quy trình cấp phép và giải phóng khả năng sáng tạo của bạn. Tham gia với chúng tôi ngay hôm nay!</p>
                        </div>

                  </div>
                  <div className="col-2">
                        <h3 style={{ color: '#03CE58' }}>Sản phẩm</h3>
                        <ul className='list-none p-0 flex flex-column gap-3'>
                              <li>
                                    <Link className='text-white'>Thịnh hành</Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Instrument Music</Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Thể loại </Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Licensing </Link>
                              </li>
                        </ul>
                  </div>
                  <div className="col-2">
                        <h3 style={{ color: '#03CE58' }}>Hỗ trợ</h3>
                        <ul className='list-none p-0 flex flex-column gap-3'>
                              <li>
                                    <Link className='text-white'>FAQ</Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Liên hệ </Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Chính sách bảo mật</Link>
                              </li>
                              <li>
                                    <Link className='text-white'>Điều khoản dịch vụ</Link>
                              </li>
                        </ul>
                  </div>
                  <div className="col-2">
                        <h3 style={{ color: '#03CE58' }}>Hỗ trợ</h3>
                        <p className='text-xl'>
                              Để biết các cập nhật và tin tức gần đây, hãy theo dõi nguồn cấp dữ liệu truyền thông xã hội của chúng tôi
                        </p>
                        <div className="flex gap-3">
                              <i className="pi pi-youtube" style={{ fontSize: '2rem', color: '#03CE58' }}></i>
                              <i className="pi pi-instagram" style={{ fontSize: '2rem', color: '#03CE58' }}></i>
                              <i className="pi pi-facebook" style={{ fontSize: '2rem', color: '#03CE58' }}></i>
                              <i className="pi pi-twitter" style={{ fontSize: '2rem', color: '#03CE58' }}></i>
                              <i className="pi pi-envelope" style={{ fontSize: '2rem', color: '#03CE58' }}></i>
                        </div>
                  </div>
            </div>
      )
}

export default Footer
