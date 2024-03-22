import { clientApi } from "../axios/index";

export const postData = (url, params, timeout = 600000) => {
  return clientApi.post(url, params, { timeout });
};
export const convertData = (body = {}) => {
  Object.keys(body).forEach((key) => {
    if (typeof body[key] === "object") body[key] = JSON.stringify(body[key]);
    else if (body[key] === "") return body[key];
    else if (typeof body[key] === "string") body[key] = body[key].trim();
    else body[key] = body[key];
  });
  return body;
};
export const getData = (url, params, blob = false, timeout = 600000) => {
  params = convertData(params);
  if (blob)
    return clientApi.get(url, {
      params,
      timeout,
      responseType: "blob",
      headers: { "Content-Type": "multipart/form-data" },
    });
  else return clientApi.get(url, { params });
};
