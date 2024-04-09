import { Menu } from "primereact/menu";
import React from "react";
import { Link } from "react-router-dom";

export const OptionPlayList = ({ handleOption }) => {
  const items = [
    {
      label: "Thêm vào danh sách phát",
      icon: "pi pi-plus",
    },
    {
      label: "Thông số",
      icon: "pi pi-chart-bar",
    },
    {
      label: "Tải về",
      icon: "pi pi-download",
    },
    {
      label: "Chỉnh sửa Playlist",
      icon: "pi pi-file-edit",
    },
    {
      label: "Cài đặt",
      icon: "pi pi-cog",
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
    },
    {
      label: "Xóa Playlist",
      icon: "pi pi-times",
    },
    {
      label: "Exit",
      icon: "pi pi-sign-out",
      command: handleOption,
    },
  ];
  return (
    <div
      style={{
        position: "absolute",
        top: "8vh",
        right: "2vh",
        margin: "1vh",
      }}
    >
      <Menu
        model={items}
        style={{
          width: "28vh",
          background: "#03CE58",
          border: "none",
        }}
      />
    </div>
  );
};
