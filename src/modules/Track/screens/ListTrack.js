import React from "react";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { useListSongHome } from "@/modules/Home/utils";
function ListTrack() {
  const data = useListSongHome();
  const currentSong = useSelector((state) => state?.currentSong?.currentSong);
  console.log(data);
  return (
    <div
      className="trend_regular "
      style={{ borderRadius: "3vh", width: "90%" }}
    >
      <ul className="p-2 m-0 flex py-3 justify-content-center">
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
          <h3
            className="text-left px-3"
            style={{ fontSize: "1.5vh", fontWeight: "400" }}
          >
            Tiếp theo
            <br />
            <strong style={{ color: "green" }}>Từ playlist </strong>Nhạc thánh
            ca dâng mẹ Maria
          </h3>
          {data.slice(0, 4).map((d) => (
            <>
              {d.name === currentSong.name ? (
                <li className="flex align-items-center px-3 justify-content-between">
                  <div className="flex align-items-center">
                    <span className="pi pi-align-justify mr-2"></span>
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
                        className="text-white no-underline text-sm font-semibold"
                      >
                        {d.name}
                      </Link>
                      <Link
                        to=""
                        className="text-left no-underline text-sm"
                        style={{ color: "lightgrey" }}
                      >
                        {d.composed}
                      </Link>
                    </div>
                  </div>
                  {/* <Button icon="pi " />
              <div className="flex-grow"></div> */}
                  <h3 className="ml-5" style={{ color: "lightgray" }}>
                    4:25
                  </h3>
                </li>
              ) : (
                <li className="flex align-items-center px-3 justify-content-between">
                  <div
                    className="flex align-items-center"
                    style={{ opacity: "0.6" }}
                  >
                    <span className="pi pi-align-justify mr-2"></span>
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
                        className="text-white no-underline text-sm font-semibold"
                      >
                        {d.name}
                      </Link>
                      <Link
                        to=""
                        className="text-left no-underline text-sm"
                        style={{ color: "lightgrey" }}
                      >
                        {d.composed}
                      </Link>
                    </div>
                  </div>
                  {/* <Button icon="pi " />
              <div className="flex-grow"></div> */}
                  <h3 className="ml-5" style={{ color: "lightgray" }}>
                    4:25
                  </h3>
                </li>
              )}
            </>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ListTrack;
