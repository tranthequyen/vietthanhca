import { listUser } from "@/modules/ListUser/api";
import { useEffect, useState } from "react";

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
