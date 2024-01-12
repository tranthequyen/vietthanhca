import { getData } from "@/lib/request";

export const listUser = (params) => getData('user/alluser', params)
