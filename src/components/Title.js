import React from "react";
import { Link } from "react-router-dom";

function Title({
  title,
  SubTitle,
  subTitle,
  href,
  icon,
  headicon,
  addFunction,
}) {
  return (
    <div
      className=" flex align-items-center mb-2 justify-content-between "
      style={{ height: "50px" }}
    >
      <b className="text-3xl p-0">
        {title}
        <i
          className={`pi ${headicon}  pl-2`}
          style={{ color: "green", fontSize: "2.5vh", cursor: "pointer" }}
          onClick={addFunction}
        ></i>
      </b>

      <Link className="text-xl text-white no-underline pr-2" to={href}>
        {subTitle} <i className={`pi ${icon}`}></i>
      </Link>
      {SubTitle && <SubTitle />}
    </div>
  );
}

export default Title;
