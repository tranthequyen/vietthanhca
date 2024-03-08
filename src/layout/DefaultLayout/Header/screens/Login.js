// Login.js
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import InputForm from "@/components/Form";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import axios from "axios";
import { clientApi } from "@/axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginSuccess } from "@/redux/userSlice";
import { listToast } from "@/constants/main";
import { setToast } from "@/redux/toast";

function Login(props) {
  const { visibleLogin, setVisibleLogin } = props;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [infos, setInfos] = useState({
    username: "",
    password: "",
  });
  const handleData = async () => {
    try {
      const response = await clientApi.post("/user/login", infos);
      const token = response.data.accessToken;
      const userInfo = response.data.data;
      dispatch(loginSuccess({ token, userInfo }));
      setVisibleLogin(false);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
    }
  };
  const footerContent = (
    <div>
      <Button
        label="Hủy"
        icon="pi pi-times"
        onClick={() => setVisibleLogin(false)}
        severity="danger"
      />
      <Button
        label="Đăng Nhập"
        onClick={handleData}
        severity="secondary"
        icon="pi pi-sign-in"
      />
    </div>
  );

  return (
    <div>
      <Dialog
        header="Đăng nhập"
        visible={visibleLogin}
        style={{ width: "50vw", top: "10px", position: "fixed" }}
        onHide={() => setVisibleLogin(false)}
        footer={footerContent}
      >
        <InputForm
          className="w-full"
          value={infos.username}
          label="Tài Khoản"
          onChange={(e) =>
            setInfos({
              ...infos,
              username: e.target.value,
            })
          }
        />

        <InputForm
          value={infos.password}
          onChange={(e) => setInfos({ ...infos, password: e.target.value })}
          label="Mật khẩu"
          className="w-full"
          type={checked ? "text" : "password"}
        />
        <div className="flex align-items-center px-2">
          <Checkbox
            value="Cheese"
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          />
          <label className="ml-2">Hiển thị mật khẩu</label>
        </div>
      </Dialog>
    </div>
  );
}

export default Login;
