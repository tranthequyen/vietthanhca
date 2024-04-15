import { useDispatch } from "react-redux";
import { useGetParams } from "@/hook/useGetParams";
import {
  setCurrentSong,
  setSongActive,
  setSongState,
} from "@/redux/currentSong";
import { useFetchAllSongs } from "@/getAPIredux/utils";
import { useListSongHome } from "@/modules/Home/utils";
import { setAllSongs } from "@/redux/allSong";
import { useEffect, useState } from "react";
import DataTablez, { Columnz } from "@/components/Datatablez";
import { Link } from "react-router-dom";
import Title from "@/components/Title";

export const PlayListSong = (props) => {
  const { handleAdd } = props;
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
        <div className="col-1"></div>
        <div className="col-10">
          <Title
            title="PLAYLIST"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
            headicon="pi pi-plus-circle"
            addFunction={handleAdd}
          />
          <div
            className="hidden lg:block p-4"
            style={{ backgroundColor: "transparent" }}
          >
            <DataTablez
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
            </DataTablez>
          </div>
          {/* <div className="block lg:hidden">
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
          </div> */}
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};
