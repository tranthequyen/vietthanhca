import { test } from "@/axios/test";
import React from "react";

function Images() {
  return (
    <div className="grid py-4">
      {test.slice(0, 3).map((d) => (
        <div className="col-4">
          <img src={d.url} className="w-full h-18rem border-round-sm" alt="" />
        </div>
      ))}
    </div>
  );
}

export default Images;
