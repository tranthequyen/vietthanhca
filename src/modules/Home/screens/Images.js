import { image } from "@/axios/image";
import { test } from "@/axios/test";
import React from "react";

function Images() {
  return (
    <div className="grid py-4 p-5 col-12 xl:col-9">
      {image.slice(0, 3).map((d, index) => (
        <div className="col-4" key={index}>
          <img
            src={d.url}
            className="border-round-lg"
            alt=""
            style={{ aspectRatio: "1.8", width: "95%" }}
          />
        </div>
      ))}
    </div>
  );
}

export default Images;
