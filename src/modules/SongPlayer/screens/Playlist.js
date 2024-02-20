import { test } from "@/axios/test";
import { Button } from "primereact/button";
import React from "react";
import { Link } from "react-router-dom";

export default function Playlist() {
  return (
    <div className="mt-5 py-3 trend_regular border-round-lg">
      <div className="flex gap-3">
        <Button
          label="Danh sách phát"
          className="mx-6 text-white-alpha-80  border-none"
          style={{ background: "#03CE58" }}
        />
        <Button
          icon="pi pi-clock"
          className="text-white-alpha-80 border-none border-circle"
          style={{ background: "#03CE58" }}
        />
        <Button
          icon="pi pi-ellipsis-h"
          className="ml-6 text-white-alpha-80  border-none border-circle"
          style={{ background: "#03CE58" }}
        />
      </div>
      <ul className="p-0 m-0 flex py-1 justify-content-center">
        <div className="flex flex-column">
          <h3 className="m-0 mt-3">Tiếp theo</h3>
          <h3 className="mb-3 m-1" style={{ color: "#03CE58" }}>
            Từ playlist{" "}
            <span className="text-white"> Nhạc thánh ca dâng mẹ Maria</span>
          </h3>
          {test.slice(0, 5).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                width="80px"
                height="80px"
                className="border-round-lg"
              />
              <div className="flex flex-column justify-content-center p-3 gap-2">
                <Link to="" className="text-white no-underline text-xl mb-3">
                  Con đường Chúa đã đi
                </Link>
                <Link to="" className="text-white no-underline">
                  Thế Quyền
                </Link>
              </div>

              <span className="ml-3">5:21</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
