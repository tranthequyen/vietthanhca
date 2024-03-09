import DataTablez, { Columnz } from "@/components/Datatablez";
import Title from "@/components/Title";
import { Button } from "primereact/button";
import React from "react";
import Header from "./../../layout/DefaultLayout/Header/screens/index";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import Cardz from "@/components/Card";

function PlayList() {
  return (
    <div className="px-4">
      <div className="w-full h-18rem bgr_playlist border-round-2xl flex flex-column justify-content-between ">
        <h1 className="xl:flex hidden xl:text-5xl p-3">
          NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
        </h1>
        <h1 className="xl:hidden text-2xl p-3" style={{ marginTop: "40px" }}>
          NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
        </h1>
        <div className="flex justify-content-between p-3">
          <div className="flex gap-3 p-3">
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
              background: "grey",
              border: "  1px solid #fff",
              opacity: "0.9",
            }}
          >
            <b className="text-2xl">
              <i className="pi pi-users  text-2xl"></i>22.000
            </b>
            <span>Lượng người nghe</span>
          </div>
        </div>
      </div>
      <br />
      <Title
        title="PLAYLIST"
        icon="pi-angle-double-right"
        subTitle="Xem thêm"
      />
      <div className="hidden lg:block">
        <DataTablez value={test.slice(0, 5)} noAction>
          <Columnz
            header="Bài hát"
            style={{ width: "40%" }}
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
                    style={{ color: "#03CE58" }}
                    className="no-underline text-xl"
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
          <Columnz header="Thời lượng" />
          <Columnz header="Người nghe" />
          <Columnz header="Album" />
        </DataTablez>
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
      <div className="pt-7">
        <Title
          title="Album kinh thánh 100 tuần"
          icon="pi-angle-double-right"
          subTitle="Xem thêm"
        />

        <div className="grid ">
          {test.slice(0, 12).map((d) => (
            <div className="col-6 md:col-4 lg:col-2 p-3 p-3 ">
              <Cardz song="Cảm mến ân tình 2" src={d.url} sing="Thế Quyền" />
            </div>
          ))}
        </div>
        <Title
          title="Album kinh thánh 100 tuần"
          icon="pi-angle-double-right"
          subTitle="Xem thêm"
        />

        <div className="grid ">
          {test.slice(0, 12).map((d) => (
            <div className="col-6 md:col-4 lg:col-2 p-3 p-3 ">
              <Cardz song="Cảm mến ân tình 2" src={d.url} sing="Thế Quyền" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayList;
