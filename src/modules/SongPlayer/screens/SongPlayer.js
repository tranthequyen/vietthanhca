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

function SongPlayer() {
  return (
    <>
      <div class="grid">
        <div class="col-3">
          <Button
            icon="pi pi-arrow-left"
            className="text-white-alpha-80 border-none border-circle ml-8 w-4rem h-4rem"
            style={{ background: "#03CE58" }}
          />
          <Button
            icon="pi pi-cog"
            className="text-white-alpha-80 border-none border-circle ml-5 w-4rem h-4rem"
            style={{ background: "#03CE58" }}
          />
          <Button
            icon="pi pi-language"
            className="text-white-alpha-80 border-none border-circle ml-5 w-4rem h-4rem"
            style={{ background: "#03CE58" }}
          />
          <Button
            icon="pi pi-window-maximize"
            className="text-white-alpha-80 border-none border-circle ml-5 w-4rem h-4rem"
            style={{ background: "#03CE58" }}
          />
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
      <Images />
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
