import DataTablez, { Columnz } from "@/components/Datatablez";
import Title from "@/components/Title";
import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import Header from "./../../layout/DefaultLayout/Header/screens/index";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import Cardz from "@/components/Card";
import banner from "../../Image Thanh Ca/z5196743261082_ccacac8a5c8693cb8abe95b58acf28b3.jpg";
import anh from "../../Image Thanh Ca/420035607_733817608699894_3506576374518450027_n.png";
import effect from "../../Image Thanh Ca/sideeffect.png";
import { useDispatch } from "react-redux";
import { useGetParams } from "@/hook/useGetParams";
import {
  setCurrentSong,
  setSongActive,
  setSongState,
} from "@/redux/currentSong";
import { useFetchAllSongs } from "@/getAPIredux/utils";
import { useListSongHome } from "../Home/utils";
import { setAllSongs } from "@/redux/allSong";

function PlayList() {
  const dispatch = useDispatch();
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const handleSongClick = (song) => {
    dispatch(setCurrentSong(song));
    dispatch(setSongState(true));
    dispatch(setSongActive(true));
  };
  useFetchAllSongs();
  const data = useListSongHome();
  useEffect(() => {
    dispatch(setAllSongs(data));
  }, [data, dispatch]);
  return (
    <>
      <div className="col-10" style={{ margin: "0 auto" }}>
        <div className="w-full " style={{ position: "relative" }}>
          <img
            className="border-round-2xl"
            style={{
              width: "100%",
              aspectRatio: "3.4",
              backgroundColor: "black",
              opacity: "0.55",
            }}
            src={banner}
            alt="Banner"
          />
          <h4
            className="xl:flex hidden xl:flex p-3"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              margin: "10px",
              fontWeight: "500",
              color: "white",
              fontSize: "2vh",
            }}
          >
            Xuan Duc <br />
          </h4>
          <h1
            className="xl:flex hidden xl:text-5xl p-3"
            style={{
              position: "absolute",
              top: "55px",
              left: "15px",
              margin: "10px",
            }}
          >
            NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
          </h1>
          <h1
            className="xl:hidden text-2xl p-3"
            style={{
              position: "absolute",
              top: "10%",
              left: "15px",
              margin: "10px",
            }}
          >
            NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
          </h1>
          <div
            className="flex gap-3 p-3"
            style={{
              position: "absolute",
              bottom: "25px",
              left: "15px",
              margin: "10px",
            }}
          >
            <Button
              icon="pi pi-play"
              rounded
              style={{ background: "#03CE58", border: "none" }}
            >
              <span>PHÁT </span>
              <span className="sm:flex hidden ml-1"> BÀI HÁT</span>
            </Button>
            <Button
              rounded
              style={{
                background: "grey",
                border: "  1px solid #fff",
                opacity: "0.9",
              }}
            >
              THEO DÕI
            </Button>
          </div>

          <div
            className="hidden lg:flex flex-column align-items-center justify-content-center p-3"
            style={{
              position: "absolute",
              bottom: "25px",
              right: "20px",
              margin: "10px",
            }}
          >
            <b className="text-3xl">
              <i className="pi pi-users  text-2xl"></i>22.000
            </b>
            <span>Lượng người nghe</span>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-1"></div>
        <div className="col-10">
          <Title
            title="PLAYLIST"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div
            className="hidden lg:block p-4"
            style={{ backgroundColor: "transparent" }}
          >
            {/* <DataTablez
              value={data.slice(0, 5)}
              noAction
              onRowClick={(e) => handleSongClick(e.data)}
            >
              <Columnz
                header="BÀI HÁT"
                style={{ width: "35%" }}
                body={(e) => (
                  <li className="flex align-items-center px-3">
                    <img
                      src="https://picsum.photos/200/300"
                      alt=""
                      width="80px"
                      height="80px"
                      className="border-round-lg"
                    />
                    <div className="flex flex-column justify-content-center p-3 gap-2">
                      <Link
                        to=""
                        style={{ color: "#03CE58", fontWeight: "bold" }}
                        className="no-underline text-lg"
                      >
                        {e.name}
                      </Link>
                      <Link to="" className=" text-white no-underline">
                        {e.composed}
                      </Link>
                    </div>
                  </li>
                )}
              />
              <Columnz
                header="THỜI LƯỢNG"
                body={(e) => (
                  <li
                    className="flex align-items-center justify-content-center px-3"
                    style={{ color: "#686868", fontWeight: "bold" }}
                  >
                    04:28
                  </li>
                )}
              />
              <Columnz
                header="NGƯỜI NGHE"
                body={(e) => (
                  <li
                    className="flex align-items-center justify-content-center px-3"
                    style={{ color: "#686868", fontWeight: "bold" }}
                  >
                    120M
                  </li>
                )}
              />
              <Columnz
                header="ALBUM"
                body={(e) => (
                  <li
                    className="flex align-items-center justify-content-center px-3"
                    style={{ color: "#686868", fontWeight: "bold" }}
                  >
                    Diệu Nhập lễ - Dâng lễ
                  </li>
                )}
              />
            </DataTablez> */}
          </div>
          <div className="block lg:hidden">
            <DataTablez value={test.slice(0, 5)} noAction>
              <Columnz
                header="Bài hát"
                style={{ width: "40%" }}
                body={(e) => (
                  <li className="grid align-items-center ">
                    <div className="col-4">
                      <img
                        src="https://picsum.photos/200/300"
                        alt=""
                        width="65px"
                        height="65px"
                        className="border-round-lg"
                      />
                    </div>
                    <div className="col-1 sm:hidden"></div>
                    <div className="col-7 flex flex-column justify-content-center gap-2">
                      <Link
                        to=""
                        style={{ color: "#03CE58" }}
                        className="no-underline text-lg"
                      >
                        {e.title}
                      </Link>
                      <Link to="" className=" text-white no-underline">
                        Thế Quyền
                      </Link>
                    </div>
                  </li>
                )}
              />
            </DataTablez>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div>
        <div className="col-10" style={{ margin: "0 auto" }}>
          <Title
            title="Album kinh thánh 100 tuần"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />

          <div className="grid ">
            {test.slice(0, 6).map((d) => (
              <div className="col-6 md:col-4 lg:col-2 p-3 p-3">
                <Cardz song="Cảm mến ân tình 2" src={anh} sing="Thế Quyền" />
              </div>
            ))}
          </div>
          <Title
            title="Album kinh thánh 100 tuần"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />

          <div className="grid ">
            {test.slice(0, 6).map((d) => (
              <div className="col-6 md:col-4 lg:col-2 p-3 p-3 ">
                <Cardz song="Cảm mến ân tình 2" src={anh} sing="Thế Quyền" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayList;
