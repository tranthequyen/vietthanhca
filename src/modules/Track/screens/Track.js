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
import { ButtonActionTrack, ButtonTrack } from "@/components/ButtonDetail";

function Track() {
  const { id } = useParams();
  const data = useDetailSong(id);
  const allSong = useSelector((state) => state.allSong);
  const indexSong = allSong.findIndex((d, index) => d.id === data.id)
  const currentTimeSong = useSelector(
    (state) => state.currentSong.currentTimeSong
  );
  const volumeSong = useSelector((state) => state.currentSong.volume);

  const [spin, setSpin] = useState(false);
  const handleSpin = (newSpin) => {
    setSpin(newSpin);
  };
  const [showMore, setShowMore] = useState(true);
  const handleClickShow = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="flex flex-column">
        <div className="grid pt-3 justify-content-center">
          <div className=" lg:col-3 flex flex-column align-items-center gap-5 " >
            <div className="flex   gap-4">
              <ButtonActionTrack icon="pi pi-arrow-left" />
              <ButtonActionTrack
                icon="pi pi-cog"
              />
              <ButtonActionTrack
                icon="pi pi-star-fill"
              />
              <ButtonActionTrack
                icon="pi pi-arrows-v"
              />
            </div>
            <img width="80%"
              className={`border-circle image_spin ${spin ? "" : "paused"}`}
              src="https://picsum.photos/350/350"
              style={{
                border: "5px solid #30F274",
              }}
            />
          </div>
          <div className="lg:col-5  xl:block">
            <h5 className="bg-default m-0 p-3 text-center border-round-3xl  text-xl">Lời bài hát</h5>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores quam ab fugiat voluptates aperiam tenetur beatae atque quaerat iure fugit quo officiis, fuga deserunt alias consectetur laborum praesentium amet.</p>
          </div>
          <div className="lg:col-4 flex flex-column justify-content-between align-items-center gap-4">
            <InputText
              type="text"
              placeholder=" Bạn muốn nghe gì ?"
              className=" input_search "
              style={{
                background: "transparent",
                width: "85%",
                height: "50px",
                borderRadius: "5vh",
              }}
            />
            <ListTrack />
          </div>
        </div>

      </div >


      <div
        className="mobile_ver"
        style={{ justifyContent: "center", alignItems: "center" }
        }
      >
        <div className="grid">
          <AudioCarousel spin={spin} />
        </div>
      </div >

      <div className="grid">
        <TrackAudio
          data={data}
          handleSpin={handleSpin}
          spin={spin}
          currentTimeSong={currentTimeSong}
          volumeSong={volumeSong}
        />
      </div>
      {
        showMore ? (
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
            <div className="flex flex-column">
              <Relation title="Dành cho bạn" />
              <Relation title="Album Kinh thánh 100 tuần" />
              <RelationBanner />
              <Relation title="Album Kinh thánh 100 tuần" />
            </div>
          </>
        )
      }

    </>
  );
}

export default Track;
