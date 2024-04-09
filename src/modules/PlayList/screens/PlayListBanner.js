import { Button } from "primereact/button";
import banner from "../../../Image Thanh Ca/z5196743261082_ccacac8a5c8693cb8abe95b58acf28b3.jpg";
import { OptionPlayList } from "../../../components/Menu";
import { useState } from "react";
import "../index.css";

export const PlayListBanner = () => {
  const [openOption, setOpenOption] = useState(false);
  const handleOption = () => {
    setOpenOption(!openOption);
  };
  return (
    <>
      <div className="col-10" style={{ margin: "0 auto" }}>
        <div className="w-full " style={{ position: "relative" }}>
          <img
            className=" border-round-2xl"
            style={{
              width: "100%",
              aspectRatio: "3.4",
              backgroundColor: "black",
              opacity: "0.55",
            }}
            src={banner}
            alt="Banner"
          />
          <h4 className="xl:flex hidden xl:flex p-3 banner_auth">
            Xuan Duc <br />
          </h4>
          <h1
            className="xl:flex hidden xl:text-5xl p-3 banner_name"
            style={{ top: "5.5vh" }}
          >
            NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
          </h1>
          <h1
            className="xl:hidden text-2xl p-3 banner_name"
            style={{ top: "10%" }}
          >
            NGÀI VÀ CON <br></br> DẪN DẮT CHÚNG CON
          </h1>
          <div
            className="flex gap-3 p-3 banner_button"
            style={{
              bottom: "2.5vh",
              left: "1.5vh",
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
            className="hidden lg:flex flex-column align-items-center justify-content-center p-3 banner_button"
            style={{
              bottom: "2.5vh",
              right: "2vh",
            }}
          >
            <b className="text-3xl text-white">
              <i className="pi pi-users text-2xl text-white "></i>22.000
            </b>
            <span className="text-white">Lượng người nghe</span>
          </div>
          <div
            className="flex flex-column align-items-center justify-content-center p-3 banner_button"
            style={{
              top: "2.5vh",
              right: "2vh",
            }}
          >
            <span
              style={{ fontSize: "3.5vh", cursor: "pointer", color: "white" }}
              className="pi pi-ellipsis-h"
              onClick={handleOption}
            ></span>
          </div>
          {openOption && <OptionPlayList handleOption={handleOption} />}
        </div>
      </div>
    </>
  );
};
