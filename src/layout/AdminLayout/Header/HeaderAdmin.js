import { Button } from "primereact/button";
import React from "react";

const HeaderAdmin = (props) => {
  return (
    <div className="card h-5rem">
      <div className="flex align-items-center justify-content-between px-2">
        <Button onClick={props.onClick} icon="pi pi-align-justify" />
        <div className="flex align-items-center gap-3">
          <h1 className="text-white text-center">Quản trị VietThanhCa</h1>
          <Button icon="pi pi-sign-out" />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
