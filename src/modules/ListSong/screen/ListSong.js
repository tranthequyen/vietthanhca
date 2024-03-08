import DataTablez from "@/components/Datatablez";
import { Column } from "primereact/column";
import React from "react";

function ListSong() {
  const songs = [
    { id: 1, title: "Bài hát 1", singer: "Ca sĩ 1", composer: "Sáng tác 1" },
    { id: 2, title: "Bài hát 2", singer: "Ca sĩ 2", composer: "Sáng tác 2" },
    { id: 3, title: "Bài hát 3", singer: "Ca sĩ 3", composer: "Sáng tác 3" },
    { id: 4, title: "Bài hát 4", singer: "Ca sĩ 4", composer: "Sáng tác 4" },
    { id: 5, title: "Bài hát 5", singer: "Ca sĩ 5", composer: "Sáng tác 5" },
    // Thêm nhiều bài hát khác vào đây
  ];

  return (
    <div className="element">
      <DataTablez value={songs}>
        <Column field="title" header="Tên bài hát" />
        <Column field="singer" header="Ca sĩ" />
        <Column field="composer" header="Sáng tác" />
      </DataTablez>
    </div>
  );
}

export default ListSong;
