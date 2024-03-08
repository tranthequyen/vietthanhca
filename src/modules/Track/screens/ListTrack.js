import React from "react";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
function ListTrack() {
  return (
    <div className="trend_regular " style={{ borderRadius: "4vh" }}>
      <ul className="p-0 m-0 flex py-3 justify-content-center">
        <div className="flex  gap-2 flex-column ">
          <div
            className="pl-3 flex flex-row justify-center"
            style={{ margin: "0 auto" }}
          >
            <Button
              label="Danh sách phát"
              severity="success"
              className="mr-4"
              style={{ borderRadius: "10vh" }}
            />
            <Button
              severity="success"
              className="mr-4"
              style={{ borderRadius: "50%", aspectRatio: "1/1" }}
            >
              <span className="pi pi-replay"></span>
            </Button>
            <Button
              severity="success"
              className="mr-4"
              style={{ borderRadius: "50%", aspectRatio: "1/1" }}
            >
              <span className="pi pi-ellipsis-h"></span>
            </Button>
          </div>
          <h3 className="text-left px-3">
            Tiếp theo
            <br />
            <strong style={{ color: "green" }}>Từ playlist </strong>Nhạc thánh
            ca dâng mẹ Maria
          </h3>
          {test.slice(0, 4).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                width="70px"
                height="70px"
                className="border-round-lg"
              />
              <div className="flex flex-column justify-content-center p-3 gap-2">
                <Link
                  to=""
                  className="text-white no-underline text-lg font-semibold"
                >
                  Con đường Chúa đã đi
                </Link>
                <Link
                  to=""
                  className="text-left no-underline text-md"
                  style={{ color: "lightgrey" }}
                >
                  Thế Quyền
                </Link>
              </div>
              {/* <Button icon="pi " /> */}
              <div className="flex-grow"></div>
              <h3 className="ml-5" style={{ color: "lightgray" }}>
                5:21
              </h3>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ListTrack;
