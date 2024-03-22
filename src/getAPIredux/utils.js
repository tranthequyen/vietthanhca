import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clientApi } from "@/axios";
import { setAllSongs } from "@/redux/allSong";

export const useFetchAllSongs = () => {
      const dispatch = useDispatch();
      useEffect(() => {
            const fetchAllSongs = async () => {
                  try {
                        const response = await clientApi.get('song/getListAll');
                        const data = response.data;

                        // console.log(data.data);
                        dispatch(setAllSongs(data.data));
                  } catch (error) {
                        console.error("Error while fetching all songs:", error);
                        throw error;
                  }
            };

            fetchAllSongs();
      }, [dispatch]);
};