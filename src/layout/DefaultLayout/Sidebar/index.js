import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "../../style/index.css";
import { Divider } from "primereact/divider";
import logo from "@/layout/img/logo.png";
import { Button } from "primereact/button";
import { useState } from "react";
const Sidebar = (props) => {
  const location = useLocation().pathname;
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const detailSideBar = [
    { name: "Khám phá", route: "/", icon: "pi pi-home" },
    { name: "Xếp hạng", route: "/rank", icon: "pi pi-chart-bar" },
    { name: "Thư viện", route: "/library", icon: "pi pi-folder" },
    { name: "PlayList", route: "/play_list", icon: "pi pi-list" },
    { name: "Mới nghe", route: "/play_list", icon: "pi pi-list" },
    { name: "Yêu thích", route: "/favourite", icon: "pi pi-heart-fill" },
    { name: "Tải về", route: "/favourite", icon: "pi pi-heart-fill" },
  ];

  return (
    <div className={`${sidebarClass}`}>
      <div
        style={{
          background:
            "linear-gradient(#0a4f27 0%,#0e321c 20%, #111813 30%, #111111 35%,#111111 100%)",
          height: "100%",
        }}
      >
        <div
          className="flex align-items-center justify-content-center"
          style={{ marginBottom: "60%" }}
        >
          <Link to={"/"} className="flex  justify-content-center">
            <img src={logo} style={{ width: "100%", aspectRatio: "1" }} />
          </Link>
          <div className="mobile_button">
            <span
              onClick={props.onClick}
              className="pl-4 pi pi-times"
              style={{ fontSize: "2.4vh" }}
            ></span>
          </div>
        </div>

        <ul className="m-0 p-0 pt-3">
          {detailSideBar.slice(0, 4).map((d, index) => (
            <Link to={d.route} key={index}>
              {location === d.route ? (
                <li
                  className="p-3 flex gap-3 text-xl text-white px-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #0a371c 30% ,transparent 70%)",
                    borderLeft: "8px  #2eac53 solid",
                  }}
                >
                  <i
                    className={`${d.icon}`}
                    style={{ color: "#28dc72", fontSize: "23px" }}
                  ></i>
                  <div
                    className="no-underline"
                    style={{ fontWeight: "bold", color: "#28dc72" }}
                  >
                    {d.name}
                  </div>
                </li>
              ) : (
                <li
                  className="p-3 flex gap-3 text-xl text-white px-5"
                  style={{ margin: "0 auto" }}
                >
                  <i
                    className={`${d.icon} text-xl`}
                    style={{ marginLeft: "10px" }}
                  ></i>
                  <div className="no-underline text-white">{d.name}</div>
                </li>
              )}
            </Link>
          ))}
          <Divider />
          {detailSideBar.slice(4).map((d, index) => (
            <Link to={d.route} key={index}>
              {location === d.route ? (
                <li
                  className="p-3 flex gap-3 text-xl text-white px-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #029D43 ,#1e1d1d)",
                    borderLeft: "5px  #30F274 solid",
                  }}
                >
                  <i className={`${d.icon} text-xl`}></i>
                  <div className="no-underline text-white">{d.name}</div>
                </li>
              ) : (
                <li className="p-3 flex gap-3 text-xl text-white px-5">
                  <i
                    className={`${d.icon} text-xl`}
                    style={{ marginLeft: "10px" }}
                  ></i>
                  <div className="no-underline text-white">{d.name}</div>
                </li>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
