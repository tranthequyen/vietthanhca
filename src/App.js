import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, AdminLayout } from "./layout";
import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./redux/userSlice";
import { clientApi } from "./axios";
import { Toast } from "primereact/toast";
import { hideToast } from "./redux/toast";
import AudioPlay from "./layout/DefaultLayout/AudioPlay/screens/AudioPlay";

import { useFetchAllSongs } from "./getAPIredux/utils";
function App() {
  useFetchAllSongs();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const toast = useRef(null);
  const toastOptions = useSelector((state) => state.toast);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      clientApi
        .get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data?.status)
            dispatch(loginSuccess({ token, userInfo: response.data?.data }));
        })
        .catch((error) => {
          console.error("Không thể lấy thông tin người dùng", error);
          localStorage.removeItem("token");
        });
    }
  }, []);

  useEffect(() => {
    if (toastOptions.severity) {
      const show = () => {
        toast.current.show({ ...toastOptions });
      };
      show();
      dispatch(hideToast());
    }
  }, [toastOptions]);
  return (
    <>
      <Toast ref={toast} />

      <Router>
        <AudioPlay />

        <Routes>
          {[...publicRoutes, ...privateRoutes].map((route, index) => {
            const Layout =
              route.layout === "admin"
                ? AdminLayout
                : route.layout
                ? DefaultLayout
                : Fragment;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <>
                    <div className="is_pc">
                      <Layout status={true}>
                        <Page />
                      </Layout>
                    </div>
                    <div className="is_mobile">
                      <Layout status={false}>
                        <Page />
                      </Layout>
                    </div>
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
