import ListTrack from "./ListTrack";
import { useState } from "react";

import Relation from "./Relation";
import TrackAudio from "./TrackAudio";
import RelationBanner from "./RelationBanner";
import { Button } from "primereact/button";
import { Link, useParams } from "react-router-dom";
import "../index.css";

import AudioCarousel from "./AudioCarousel";
import { useDetailSong } from "../utils";
import { useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import anh1 from "../../../Image Thanh Ca/421826174_1341861439848446_3497682106586253765_n.png";
import anh5 from "../../../Image Thanh Ca/420647413_888641202709305_1876205483034809311_n.png";
import anh6 from "../../../Image Thanh Ca/420035607_733817608699894_3506576374518450027_n.png";
function Track() {
  const { id } = useParams();
  const currentSong = useSelector((state) => state.currentSong.currentSong);
  const data = useDetailSong(id);
  const currentTimeSong = useSelector(
    (state) => state.currentSong.currentTimeSong
  );

  const [spin, setSpin] = useState(false);
  const handleSpin = (newSpin) => {
    setSpin(newSpin);
  };
  const [showMore, setShowMore] = useState(true);
  const handleClickShow = () => {
    setShowMore(!showMore);
  };
  console.log(spin);
  return (
    <>
      <div className="flex flex-column">
        <div className="grid">
          <div
            className="col-12 xl:col-3 flex flex-row p-3 mt-3"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Link to={"/"}>
              <Button
                icon="pi pi-arrow-left"
                text
                className="button mr-4"
                style={{
                  borderRadius: "50%",
                  aspectRatio: "1/1",
                  border: "2px solid white",
                  color: "white",
                }}
              ></Button>
            </Link>
            <Button
              icon="pi pi-cog"
              text
              className="button mr-4"
              style={{
                borderRadius: "50%",
                aspectRatio: "1/1",
                color: "white",
                border: "2px solid white",
              }}
            ></Button>
            <Button
              icon="pi pi-star-fill"
              text
              className="button mr-4"
              style={{
                borderRadius: "50%",
                aspectRatio: "1/1",
                color: "white",
                border: "2px solid white",
              }}
            ></Button>
            <Button
              icon="pi pi-arrows-v"
              text
              className="button mr-4"
              style={{
                borderRadius: "50%",
                aspectRatio: "1/1",
                color: "white",
                border: "2px solid white",
              }}
            ></Button>
          </div>
          <div className="xl:col-6 hidden xl:flex">
            <Button
              label="Lời bài hát"
              severity="success"
              className="mt-4"
              style={{ borderRadius: "10vh", width: "80%", margin: "0 auto" }}
            />
          </div>
          <div className="xl:col-3 hidden xl:flex">
            <InputText
              type="text"
              placeholder=" Bạn muốn nghe gì ?"
              className=" input_search mt-4"
              style={{
                background: "transparent",
                width: "85%",
                height: "50px",
                borderRadius: "5vh",
              }}
            />
          </div>
        </div>
        <div className="xl:col-12 hidden xl:flex">
          <div
            className="col-3 text-center flex flex-column"
            style={{ display: "flex", alignItems: "center", margin: "0 auto" }}
          >
            <div className="flex px-4" style={{ marginTop: "5vh" }}>
              <img
                className={`image_spin ${spin ? "" : "paused"}`}
                src="https://i.pinimg.com/736x/71/62/f2/7162f25b5e4ba89c8f6fb22342656209.jpg"
                style={{
                  borderRadius: "50%",
                  aspectRatio: "1",
                  width: "90%",
                  maxWidth: "400px",
                  border: "5px solid #30F274",
                }}
                alt="Avatar"
              />
            </div>
          </div>
          <div
            className="col-6 text-center px-6 py-4"
            style={{ margin: "0 auto", textAlign: "left" }}
          >
            <p
              style={{
                fontSize: "5.5vh",
                justifyContent: "start",
                fontWeight: "bold",
                width: "90%",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
              Ôi Tình уêu Thiên Ϲhúa
              <br />
            </p>
          </div>
          <div className="xl:col-3 hidden xl:block">
            <ListTrack />
          </div>
        </div>
      </div>
      {/* Ver Mobile*/}
      <div
        className="mobile_ver"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="grid">
          <AudioCarousel spin={spin} />
        </div>
      </div>

      <div className="grid">
        <TrackAudio
          data={data}
          handleSpin={handleSpin}
          spin={spin}
          currentTimeSong={currentTimeSong}
        />
      </div>
      {showMore ? (
        <>
          <div
            className="col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              icon="pi pi-angle-down"
              label="Show More"
              onClick={handleClickShow}
              style={{ background: "none", border: "solid 1px white" }}
            ></Button>
          </div>
        </>
      ) : (
        <>
          <div
            className="col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              icon="pi pi-angle-up"
              label="Show Less"
              onClick={handleClickShow}
              style={{ background: "none", border: "solid 1px white" }}
            ></Button>
          </div>
          <div className="flex flex-column col-9 " style={{ margin: "0 auto" }}>
            <Relation title="Dành cho bạn" src={anh1} />
            <Relation title="Album Kinh thánh 100 tuần" src={anh6} />
            <RelationBanner />
            <Relation title="Album Kinh thánh 100 tuần" src={anh5} />
          </div>
        </>
      )}
    </>
  );
}

export default Track;
