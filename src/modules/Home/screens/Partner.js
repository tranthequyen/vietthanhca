import { test } from "@/axios/test";
import React from "react";

function Partner() {
  return (
    <div className="partner mr-2 px-2">
      <h1 className="text-center m-0 p-4" style={{ color: "#03CE58" }}>
        Các đối tác âm nhạc
      </h1>
      <div className="grid">
        {test.slice(0, 12).map((d) => (
          <div className="col-2">
            <img
              src="https://picsum.photos/200/300"
              className="w-full h-8rem border-round-sm"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
