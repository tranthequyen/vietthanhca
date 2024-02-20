import { test } from "@/axios/test";
import Title from "@/components/Title";
import React from "react";
import { Link } from "react-router-dom";

function NewRelease() {
  return (
    <div>
      <div className="grid">
        <div className="col-9">
          <Title
            title="Mới phát hành"
            icon="pi-angle-double-right"
            subTitle="Xem thêm"
          />
          <div>
            {test.slice(0, 3).map((d) => (
              <div className="grid justify-content-center align-items-center text-center">
                <div className="col-1">
                  <img
                    src="https://picsum.photos/200/300"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </div>
                <div className="col-5">
                  <Link
                    to=""
                    className=" no-underline text-xl"
                    style={{ color: "#03CE58" }}
                  >
                    {" "}
                    Trong tình yêu của mẹ
                  </Link>
                </div>
                <div className="col-2">
                  <Link to="" className="text-white no-underline text-xl">
                    {" "}
                    Thế Quyền
                  </Link>
                </div>
                <div className="col-2">
                  <span style={{ color: "#656565" }}>04:25</span>
                </div>
                <div className="col-2">
                  <i
                    className="pi pi-plus text-lg"
                    style={{ color: "#E5AC1A" }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default NewRelease;
