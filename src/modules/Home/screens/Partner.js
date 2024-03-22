import { test } from "@/axios/test";
import React from "react";

function Partner() {
  return (
    <div className="col-12 xl:col-9 p-5">
      <h1 className="text-center m-0 p-4" style={{ color: "#03CE58" }}>
        Các đối tác âm nhạc
      </h1>
      <div className="grid">
        {test.slice(0, 12).map((d) => (
          <div className="col-2">
            <img
              src="https://media.licdn.com/dms/image/C5103AQFaAB0c8_8MXw/profile-displayphoto-shrink_800_800/0/1559875705898?e=2147483647&v=beta&t=mOnyjTECuOypsp8EOHODApAlQlCTbGBgFR19xpwx5QU"
              style={{
                width: "100%",
                aspectRatio: "1.8",
                borderRadius: "10px",
              }}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
