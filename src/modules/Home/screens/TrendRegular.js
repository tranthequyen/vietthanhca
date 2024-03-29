import React from "react";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
import anh1 from "../../../Image Thanh Ca/418426823_18405676804031112_8571678238867939356_n.jpg";
import anh2 from "../../../Image Thanh Ca/421826174_1341861439848446_3497682106586253765_n.webp";
function TrendRegular() {
  return (
    <div className="trend_regular border-round-xl" style={{ paddingTop: "4%" }}>
      <ul className="p-0 m-0 flex py-3 justify-content-center">
        <div className="flex  gap-2 flex-column p-2">
          <h2 className="mt-0 px-3" style={{ color: "#06b64f" }}>
            Album hot
          </h2>
          {test.slice(0, 3).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src={anh1}
                alt=""
                width="60px"
                height="60px"
                className="border-round-lg"
              />
              <div className="flex align-items-center ">
                <div className="flex flex-column justify-content-center p-3 gap-2">
                  <Link
                    to=""
                    className="text-white no-underline text-md"
                    style={{ fontWeight: "bold" }}
                  >
                    Con đường Chúa đã đi
                  </Link>
                  <Link to="" className="text-white no-underline text-sm">
                    Thế Quyền
                  </Link>
                </div>
                {/* <Button icon="pi " /> */}
                <span
                  className="pi pi-ellipsis-v"
                  style={{ marginLeft: "10px" }}
                ></span>
              </div>
            </li>
          ))}
          <h2 className="px-3 m-0" style={{ color: "#06b64f" }}>
            Thịnh hành
          </h2>
          {test.slice(0, 3).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src={anh2}
                alt=""
                width="60px"
                height="60px"
                className="border-round-lg"
              />
              <div className="flex align-items-center ">
                <div className="flex flex-column justify-content-center p-3 gap-2">
                  <Link
                    to=""
                    className="text-white no-underline text-md"
                    style={{ fontWeight: "bold" }}
                  >
                    Con đường Chúa đã đi
                  </Link>
                  <Link to="" className="text-white no-underline text-sm">
                    Thế Quyền
                  </Link>
                </div>
                {/* <Button icon="pi " /> */}
                <span
                  className="pi pi-ellipsis-v"
                  style={{ marginLeft: "10px" }}
                ></span>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default TrendRegular;
