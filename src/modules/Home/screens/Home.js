import { clientApi } from "@/axios";
import { test } from "@/axios/test";
import Cardz from "@/components/Card";
import Card from "@/components/Card";
import Title from "@/components/Title";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import TrendRegular from "./TrendRegular";
import { musician } from "@/axios/musician";
import ads from "../../../Image Thanh Ca/anhh.png";
import NewRelease from "./NewRelease";
import Images from "./Images";
import Partner from "./Partner";
import "../index.css";
import { useDispatch } from "react-redux";
import {
  setCurrentSong,
  setSongActive,
  setSongState,
} from "@/redux/currentSong";
import { useGetApi } from "@/hook/useGetApi";
import { getlistSongHome } from "../api";
import { useGetParams } from "@/hook/useGetParams";
import { useListSongHome } from "../utils";
import { setAllSongs } from "@/redux/allSong";
import { useFetchAllSongs } from "@/getAPIredux/utils";
function Home() {
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
      <div className="grid">
        <div className="hidden xl:flex col-1"></div>
        <div className="col-12 xl:col-8 grid px-5 py-0 ">
          <div className="col-12">
            <Banner />
          </div>
          <div className="col-12">
            <Title
              title="Gần đây"
              icon="pi-angle-double-right"
              subTitle="Xem thêm"
            />
            <div className="grid ">
              {test.slice(0, 4).map((d) => (
                <div
                  className="col-6 md:col-4 lg:col-3 p-3 p-3 "
                  onClick={() => handleSongClick(d)}
                >
                  <Cardz
                    song="Cảm mến ân tình 2"
                    src={d.url}
                    sing="Thế Quyền"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <Title
              title="Thịnh hành"
              icon="pi-angle-double-right"
              subTitle="Xem thêm"
            />
            <div className="grid ">
              {test.slice(0, 8).map((d) => (
                <div
                  className="col-6 md:col-4 lg:col-3 p-3 p-3 "
                  onClick={() => handleSongClick(d)}
                >
                  <Cardz
                    song="Cảm mến ân tình 2"
                    src={d.url}
                    sing="Thế Quyền"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <Title
              title="Nghệ sỹ tiêu biểu"
              icon="pi-angle-double-right"
              subTitle="Xem thêm"
            />
            <div className="grid justify-content-between  ">
              {musician.slice(0, 6).map((d) => (
                <div className="col-4 md:col-2">
                  <img
                    src={d.url}
                    width="90%"
                    style={{ borderRadius: "50%", aspectRatio: "1" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-3 p-2">
          <div className="  hidden xl:block">
            <TrendRegular />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="hidden xl:flex col-1"></div>
        <div className="col-12 xl:col-11">
          <div className="grid ">
            <div className=" col-12 xl:col-9 px-5">
              <Title
                title="Mùa chay"
                icon="pi-angle-double-right"
                subTitle="Xem thêm"
              />
              <div className="grid">
                {test.slice(0, 8).map((d) => (
                  <div
                    className="col-6 md:col-4 lg:col-3 p-3"
                    onClick={() => handleSongClick(d)}
                  >
                    <Cardz
                      song="Cảm mến ân tình"
                      src={d.url}
                      sing="Thế Quyền"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-3 relative hidden xl:block p-0">
              <div className="bg-ads"></div>
              <div className="bdd">
                <img
                  src={ads}
                  width={"100%"}
                  alt=""
                  className=""
                  style={{
                    marginLeft: "10px",
                    right: "0",
                    top: "0",
                  }}
                />
              </div>
            </div>
          </div>
          <NewRelease />
          <Images />
          <div className="grid p-5">
            <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
              <Title
                title="Nhập Lễ - Dâng Lễ"
                icon="pi-angle-double-right"
                subTitle="Xem thêm"
              />
              <div className="grid">
                {test.slice(0, 8).map((d) => (
                  <div className="col-6 lg:col-3 p-3">
                    <Cardz
                      song="Cảm mến ân tình"
                      src={d.url}
                      sing="Thế Quyền"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-3 hidden xl:block"></div>
          </div>
          <Partner />
          <div className="grid p-5">
            <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
              <Title
                title="Đức mẹ"
                icon="pi-angle-double-right"
                subTitle="Xem thêm"
              />
              <div className="grid">
                {test.slice(0, 8).map((d) => (
                  <div className="col-6 lg:col-3 p-3">
                    <Cardz
                      song="Cảm mến ân tình"
                      src={d.url}
                      sing="Thế Quyền"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-3 hidden xl:block"></div>
          </div>
          <div className="grid p-5">
            <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
              <Title
                title="Cầu hôn"
                icon="pi-angle-double-right"
                subTitle="Xem thêm"
              />
              <div className="grid">
                {test.slice(0, 8).map((d) => (
                  <div className="col-6 lg:col-3 p-3">
                    <Cardz
                      song="Cảm mến ân tình"
                      src={d.url}
                      sing="Thế Quyền"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-3 hidden xl:block"></div>
          </div>
          <div className="grid p-5">
            <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
              <Title
                title="Lễ tang"
                icon="pi-angle-double-right"
                subTitle="Xem thêm"
              />
              <div className="grid">
                {test.slice(0, 8).map((d) => (
                  <div className="col-6 lg:col-3 p-3">
                    <Cardz
                      song="Cảm mến ân tình"
                      src={d.url}
                      sing="Thế Quyền"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-3 hidden xl:block"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
