import { postData, getData } from "@/lib/request";
export const getlistSongHome = (params) => getData("song/getListAll", params);
