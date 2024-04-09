import { Button } from 'primereact/button'
import React from 'react'
import { FaRandom } from "react-icons/fa";
function ButtonDetail() {
      return (
            <>
                  <Button style={{
                        borderRadius: "50%",
                        aspectRatio: "1/1",
                        border: "2px solid white",
                        color: "white",
                  }}
                        className="button mr-4"

                  />
            </>
      )
}

export default ButtonDetail
export const ButtonActionTrack = ({ icon }) => {
      return (
            <Button className='border-circle text-white border-2 border-white bg-black-alpha-90' icon={icon}
            />
      )
}
export const ButtonAudio = ({ icon, onClick }) => {
      return (
            <Button className='border-none' style={{ background: "#03CE58" }} rounded icon={icon} onClick={onClick} />
      )
}
export const ButtonRandom = ({ onClick, className }) => {
      return (
            <button className={`border-none border-circle button-random ${className} `} style={{ background: "#03CE58" }} onClick={onClick} >
                  <FaRandom />
            </button >
      )
}