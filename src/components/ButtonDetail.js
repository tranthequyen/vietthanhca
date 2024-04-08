import { Button } from 'primereact/button'
import React from 'react'

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
