import { useEffect, useState } from "react";
import { listUser } from "../api";

export const useListUser = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await listUser({ status: 1, ...params });
    if (response.data.status) setData(response.data.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
