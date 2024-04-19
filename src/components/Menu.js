import { Menu } from "primereact/menu";
import React from "react";
import { Link } from "react-router-dom";
import { PlaylistOptions } from "@/constants/main";

export const OptionPlayList = ({ handleAdd, handleAddChange }) => {
  const model = PlaylistOptions.map((option) => {
    if (option.label === "Tải về") {
      return {
        ...option,
        command: () => handleAdd(),
      };
    }
    if (option.label === "Chỉnh sửa Playlist") {
      return {
        ...option,
        command: () => handleAddChange(),
      };
    }
    return option;
  });
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
        model={model}
        style={{
          width: "28vh",
          background: "#606060",
          border: "none",
        }}
      />
    </div>
  );
};
