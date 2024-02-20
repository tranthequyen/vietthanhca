import React from "react";

import { Link } from "react-router-dom";
import "../../style/index.css";

function SideBarAdmin() {
  return (
    <div className="card  sidebar_admin ">
      <ul className="m-0 p-0">
        <li className="p-3 flex gap-3  text-xl text-white">
          <i className="pi pi-home text-xl"></i>
          <Link className="no-underline text-white">Trang chủ</Link>
        </li>
        <li className="p-3 flex gap-3  text-xl text-white">
          <i className="pi pi-users text-xl"></i>
          <Link to="/list_user" className="no-underline text-white">
            Danh sách người dùng
          </Link>
        </li>
        <li className="p-3 flex gap-3  text-xl text-white">
          <i className="pi pi-list text-xl"></i>
          <Link to="/list_song" className="no-underline text-white">
            Danh sách bài hát
          </Link>
        </li>
        <li className="p-3 flex gap-3  text-xl text-white">
          <i className="pi pi-book text-xl"></i>
          <Link className="no-underline text-white">Bài đọc</Link>
        </li>
        <li className="p-3 flex gap-3  text-xl text-white">
          <i className="pi pi-cog pi pi-spin text-xl"></i>
          <Link className="no-underline text-white">Chỉnh sửa tổng quan</Link>
        </li>
      </ul>
    </div>
  );
}
export default SideBarAdmin;
