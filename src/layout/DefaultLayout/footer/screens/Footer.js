import React from "react";
import logo from "@/layout/img/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer flex flex-column">
      <div className="grid">
        <div className="col-4 xl:col-5" style={{ paddingLeft: "5%" }}>
          <div
            className="flex footer_logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="logo hidden lg:block"
              src={logo}
              style={{ width: "200px", height: "200px" }}
            />
            <img
              className="logo block lg:hidden"
              src={logo}
              style={{ width: "140px", height: "140px" }}
            />
            <h1>VIETTHANHCA</h1>
          </div>
        </div>
        <div className="col-4 xl:col-2">
          <h3 style={{ color: "#03CE58" }}>Sản phẩm</h3>
          <ul className="list-none p-0 flex flex-column gap-3">
            <li>
              <Link className="text-white">Thịnh hành</Link>
            </li>
            <li>
              <Link className="text-white">Instrument Music</Link>
            </li>
            <li>
              <Link className="text-white">Thể loại </Link>
            </li>
            <li>
              <Link className="text-white">Licensing </Link>
            </li>
          </ul>
        </div>
        <div className="col-4 xl:col-2">
          <h3 style={{ color: "#03CE58" }}>Hỗ trợ</h3>
          <ul className="list-none p-0 flex flex-column gap-3">
            <li>
              <Link className="text-white">FAQ</Link>
            </li>
            <li>
              <Link className="text-white">Liên hệ </Link>
            </li>
            <li>
              <Link className="text-white">Chính sách bảo mật</Link>
            </li>
            <li>
              <Link className="text-white">Điều khoản dịch vụ</Link>
            </li>
          </ul>
        </div>
        <div
          className="xl:col-3 hidden xl:flex flex-column"
          style={{ paddingTop: "0.5rem", paddingLeft: "2rem" }}
        >
          <div className="flex flex-column">
            <h3
              style={{ fontWeight: "400", fontSize: "20px", color: "#03CE58" }}
            >
              Kết nối với chúng tôi
            </h3>
            <div className="flex">
              <div className="d-none d-xl-flex gap-3">
                <i
                  className="pi pi-youtube m-2"
                  style={{ fontSize: "1.7rem", color: "#03CE58" }}
                ></i>
                <i
                  className="pi pi-instagram m-2"
                  style={{ fontSize: "1.7rem", color: "#03CE58" }}
                ></i>
                <i
                  className="pi pi-facebook m-2"
                  style={{ fontSize: "1.7rem", color: "#03CE58" }}
                ></i>
                <i
                  className="pi pi-envelope m-2"
                  style={{ fontSize: "1.7rem", color: "#03CE58" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="flex flex-column">
            <h3
              style={{
                fontWeight: "400",
                fontSize: "20px",
                color: "#03CE58",
                marginBlockEnd: "0",
              }}
            >
              Tải ứng dụng
            </h3>
            <h2>VIETTHANHCA</h2>
          </div>
        </div>
      </div>
      <div className=" col-12 xl:hidden flex " style={{ paddingTop: "0.5rem" }}>
        <div className="col-7 flex flex-column " style={{ margin: "0 auto" }}>
          <h3 style={{ fontWeight: "400", fontSize: "20px", color: "#03CE58" }}>
            Kết nối với chúng tôi
          </h3>
          <div className="flex">
            <div className="d-none d-xl-flex gap-3">
              <i
                className="pi pi-youtube m-2"
                style={{ fontSize: "1.5rem", color: "#03CE58" }}
              ></i>
              <i
                className="pi pi-instagram m-2"
                style={{ fontSize: "1.5rem", color: "#03CE58" }}
              ></i>
              <i
                className="pi pi-facebook m-2"
                style={{ fontSize: "1.5rem", color: "#03CE58" }}
              ></i>
              <i
                className="pi pi-twitter m-2"
                style={{ fontSize: "1.5rem", color: "#03CE58" }}
              ></i>
              <i
                className="pi pi-envelope m-2"
                style={{ fontSize: "1.5rem", color: "#03CE58" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-5 flex flex-column">
          <h3
            style={{
              fontWeight: "400",
              fontSize: "20px",
              color: "#03CE58",
              marginBlockEnd: "0.5rem",
            }}
          >
            Tải ứng dụng
          </h3>
          <h3>VIETTHANHCA</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
