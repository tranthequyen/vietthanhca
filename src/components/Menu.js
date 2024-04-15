import { Menu } from "primereact/menu";
import React from "react";
import { Link } from "react-router-dom";
import { PlaylistOptions } from "@/constants/main";

export const OptionPlayList = ({ handleOption }) => {
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
        model={PlaylistOptions}
        style={{
          width: "28vh",
          background: "#606060",
          border: "none",
        }}
      />
    </div>
  );
};
