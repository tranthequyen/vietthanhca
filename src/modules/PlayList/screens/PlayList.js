import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import banner from "../../../Image Thanh Ca/z5196743261082_ccacac8a5c8693cb8abe95b58acf28b3.jpg";
import anh from "../../../Image Thanh Ca/420035607_733817608699894_3506576374518450027_n.png";
import { Cards, Cardz } from "@/components/Card";
import { PlayListBanner } from "./PlayListBanner";
import { TabPanel, TabView } from "primereact/tabview";
import { PlayListSong } from "./PlayListSong";
import { Dialog } from "primereact/dialog";
import { Dialogz } from "@/components/Dialog";
import { listQuality } from "@/constants/main";

function PlayList() {
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);
  const handleAdd = () => {
    setShowAddPlaylist(true);
  };
  return (
    <>
      <TabView>
        <TabPanel style={{ marginLeft: "9%" }} header="BÀI HÁT"></TabPanel>
        <TabPanel header="ALBUM"></TabPanel>
        <TabPanel header="PLAYLIST">
          <PlayListBanner />
          <PlayListSong handleAdd={handleAdd} />
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
                    <Cards song="Cảm mến ân tình" src={anh} sing="Thế Quyền" />
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
                    <Cards song="Cảm mến ân tình" src={anh} sing="Thế Quyền" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Dialogz
            header="Chất lượng tải"
            show={showAddPlaylist}
            setShow={setShowAddPlaylist}
            item={listQuality}
          ></Dialogz>
        </TabPanel>
        <TabPanel header="YÊU THÍCH"></TabPanel>
      </TabView>
    </>
  );
}

export default PlayList;
