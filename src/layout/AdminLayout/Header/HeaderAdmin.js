import { Button } from "primereact/button";
import React from "react";

function HeaderAdmin() {
  return (
    <div className="card h-5rem">
      <div className="flex align-items-center gap-3 justify-content-end px-3">
        <h1 className="text-white text-center">Quản trị VietThanhCa</h1>
        <Button icon="pi pi-sign-out" />
      </div>
    </div>
  );
}

export default HeaderAdmin;
