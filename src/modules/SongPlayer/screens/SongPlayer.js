import { test } from "@/axios/test";
import Cardz from "@/components/Card";
import InputForm from "@/components/Form";
import Title from "@/components/Title";
import Images from "@/modules/Home/screens/Images";
import TrendRegular from "@/modules/Home/screens/TrendRegular";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Playlist from "./Playlist";
import ImageSong from "./ImageSong";
import AudioPlay from "@/layout/DefaultLayout/AudioPlay/screens/AudioPlay";
import AudioSong from "./AudioSong";
import ImageSongs from "./ImageSongs";

function SongPlayer() {
  return (
    <>
      <div class="grid">
        <div class="col-3">
          <Button
            className="text-white-alpha-80 border-circle border-white ml-8 w-4rem h-4rem"
            style={{
              background: "transparent",
              fontWeight: "bold", // In đậm viền và icon
            }}
          >
            <i
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                fontWeight: "bolder", // In đậm icon
              }}
              className="pi pi-arrow-left"
            ></i>
          </Button>{" "}
          <Button
            className="text-white-alpha-80 border-circle border-white ml-5 w-4rem h-4rem"
            style={{
              background: "transparent",
            }}
          >
            <i
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                fontWeight: "bolder",
              }}
              className="pi pi-cog"
            ></i>
          </Button>{" "}
          <Button
            className="text-white-alpha-80 border-circle border-white ml-5 w-4rem h-4rem"
            style={{
              background: "transparent",
            }}
          >
            <i
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                fontWeight: "bolder",
              }}
              className="pi pi-language"
            ></i>
          </Button>{" "}
          <Button
            className="text-white-alpha-80 border-circle border-white ml-5 w-4rem h-4rem"
            style={{
              background: "transparent",
            }}
          >
            <i
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
                fontWeight: "bolder",
              }}
              className="pi pi-window-maximize"
            ></i>
          </Button>{" "}
          <ImageSong />
        </div>

        <div className="col-6 d-flex justify-content-center">
          <Button
            label="Lời bài hát"
            className="ml-8 py-3 text-white border border-white rounded-circle"
            style={{ background: "#03CE58", width: "75%" }}
          />
        </div>

        <div class="col-3">
          <Button
            icon="pi pi-search"
            label="Con xin dâng mẹ"
            className="py-3 text-white border border-white bg-transparent col-12"
          />
          <Playlist />
        </div>
      </div>

      <div>
        <AudioSong />
      </div>
      <div className="grid">
        <div className="col-9">
          <Title
            title="Dành cho bạn"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div className="grid">
            {test.slice(0, 6).map((d) => (
              <div className="col">
                <Cardz
                  song="Cảm mến ân tình"
                  src="https://picsum.photos/200/300"
                  sing="Diệu Hiền - Ngọc Quy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-9">
          <Title
            title="Album Kinh thánh 100 tuần"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div className="grid">
            {test.slice(0, 6).map((d) => (
              <div className="col">
                <Cardz
                  song="Cảm mến ân tình"
                  src="https://picsum.photos/200/300"
                  sing="Diệu Hiền - Ngọc Quy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageSongs />
      <div className="grid">
        <div className="col-9">
          <Title
            title="Album Kinh thánh 100 tuần"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div className="grid">
            {test.slice(0, 6).map((d) => (
              <div className="col">
                <Cardz
                  song="Cảm mến ân tình"
                  src="https://picsum.photos/200/300"
                  sing="Diệu Hiền - Ngọc Quy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SongPlayer;
