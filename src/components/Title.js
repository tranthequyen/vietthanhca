import React from 'react'
import { Link } from 'react-router-dom'

function Title({ title, SubTitle, subTitle, href, icon }) {
      return (
            <div
                  className=" flex align-items-center mb-2 justify-content-between "
                  style={{ height: '50px', }}
            >
                  <b className="text-3xl p-0">{title}</b>
                  <Link className='text-xl text-white no-underline pr-2' to={href}>
                        {subTitle} <i className={`pi ${icon}`} ></i></Link>
                  {SubTitle && <SubTitle />}
            </div>
      )
}

export default Title
