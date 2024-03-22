import { test } from "@/axios/test";
import Title from "@/components/Title";
import React from "react";
import { Link } from "react-router-dom";

function NewRelease() {
  return (
    <div>
      <div className="grid p-5">
        <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
          <Title
            title="Mới phát hành"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div>
            {test.slice(0, 3).map((d) => (
              <div className="grid justify-content-center align-items-center text-center">
                <div className=" col-5 sm:col-3 md:col-2">
                  <img
                    src={d.url}
                    width="100px"
                    height="100px"
                    alt=""
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="col-7 xl:col-5">
                  <Link
                    to=""
                    className=" no-underline text-xl"
                    style={{ color: "#03CE58" }}
                  >
                    {" "}
                    Trong tình yêu của mẹ
                  </Link>
                </div>
                <div className="md:col-2 hidden md:block">
                  <Link to="" className="text-white no-underline text-xl">
                    {" "}
                    Thế Quyền
                  </Link>
                </div>
                <span
                  className="xl:col-2 hidden xl:block"
                  style={{ color: "#656565" }}
                >
                  04:25
                </span>
                <div className="md:col-1 hidden md:block">
                  <i
                    className="pi pi-plus text-lg"
                    style={{ color: "#E5AC1A" }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:col-3 hiden xl:block"></div>
      </div>
    </div>
  );
}

export default NewRelease;
