import React from "react";
import { test } from "@/axios/test";
import { Link } from "react-router-dom";
function TrendRegular() {
  return (
    <div className="trend_regular border-round-lg">
      <ul className="p-0 m-0 flex py-3 justify-content-center">
        <div className="flex  gap-2 flex-column ">
          <h3 className="mt-0 px-3">Thường xuyên nghe</h3>
          {test.slice(0, 3).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                width="80px"
                height="80px"
                className="border-round-lg"
              />
              <div className="flex flex-column justify-content-center p-3 gap-2">
                <Link to="" className="text-white no-underline text-xl">
                  Con đường Chúa đã đi
                </Link>
                <Link to="" className="text-white no-underline">
                  Thế Quyền
                </Link>
              </div>
              {/* <Button icon="pi " /> */}
              <span className="pi pi-ellipsis-v"></span>
            </li>
          ))}
          <h3 className="px-3">Thịnh hành</h3>
          {test.slice(0, 3).map((d) => (
            <li className="flex align-items-center px-3">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                width="80px"
                height="80px"
                className="border-round-lg"
              />
              <div className="flex flex-column justify-content-center p-3 gap-2">
                <Link to="" className="text-white no-underline text-xl">
                  Con đường Chúa đã đi
                </Link>
                <Link to="" className="text-white no-underline">
                  Thế Quyền
                </Link>
              </div>
              {/* <Button icon="pi " /> */}
              <span className="pi pi-ellipsis-v"></span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default TrendRegular;
