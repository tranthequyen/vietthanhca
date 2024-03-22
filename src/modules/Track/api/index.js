import { postData, getData } from "@/lib/request";
export const getDetailSong = (params) => getData('song/getDetailSong', params)