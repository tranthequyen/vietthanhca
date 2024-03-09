import React from "react";

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
    <div className={`${sidebarClass} `}>
      <div className="flex align-items-center justify-content-center">
        <Link
          to={"/"}
          className="flex align-items-center justify-content-center"
        >
          <img src={logo} width={"80px"} height={"80px"} />
          <h2 className="m-0 text-center webname" style={{ color: "white" }}>
            {" "}
            VIETTHANHCA
          </h2>
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
        {detailSideBar.slice(0, 4).map((d) => (
          <Link to={d.route}>
            {location === d.route ? (
              <li
                className="p-3 flex gap-3 text-xl text-white"
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
              <li className="p-3 flex gap-3 text-xl text-white">
                <i
                  className={`${d.icon} text-xl`}
                  style={{ marginLeft: "5px" }}
                ></i>
                <div className="no-underline text-white">{d.name}</div>
              </li>
            )}
          </Link>
        ))}
        <Divider />
        {detailSideBar.slice(4).map((d) => (
          <Link to={d.route}>
            {location === d.route ? (
              <li
                className="p-3 flex gap-3 text-xl text-white"
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
              <li className="p-3 flex gap-3 text-xl text-white">
                <i className={`${d.icon} text-xl`}></i>
                <div className="no-underline text-white">{d.name}</div>
              </li>
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
