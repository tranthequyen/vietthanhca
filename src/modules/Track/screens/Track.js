import Cardz from "@/components/Card";
import Title from "@/components/Title";
import TrendRegular from "@/modules/Home/screens/TrendRegular";
import ListTrack from "./ListTrack";
import { useState } from "react";
import { Slider } from "primereact/slider";
import Relation from "./Relation";
import TrackAudio from "./TrackAudio";
import RelationBanner from "./RelationBanner";
import { Button } from "primereact/button";
import { Link, useParams } from "react-router-dom";
import '../index.css'
import { Carousel } from "primereact/carousel";
import AudioCarousel from "./AudioCarousel";
import { useDetailSong } from "../utils";

function Track() {
  const { id } = useParams()
  let _id = id
  const data = useDetailSong(id)
  console.log(data);
  const [spin, setSpin] = useState(false)
  const handleSpin = () => {
    setSpin(!spin)
  }
  const [showMore, setShowMore] = useState(true)
  const handleClickShow = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <div className="flex flex-column">
        <div className="grid">
          <div className="col-12 xl:col-4 flex flex-row p-3" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Link to={'/'}>
              <Button
                icon='pi pi-arrow-left'
                text
                className='button mr-4'
                style={{ borderRadius: "50%", aspectRatio: '1/1', border: '2px solid white', color: 'white' }}
              >
              </Button>
            </Link>
            <Button
              icon='pi pi-cog'
              text
              className='button mr-4'
              style={{ borderRadius: "50%", aspectRatio: '1/1', color: 'white', border: '2px solid white' }}
            >
            </Button>
            <Button
              icon="pi pi-star-fill"
              text
              className='button mr-4'
              style={{ borderRadius: "50%", aspectRatio: '1/1', color: 'white', border: '2px solid white' }}
            >
            </Button>
            <Button
              icon='pi pi-arrows-v'
              text
              className='button mr-4'
              style={{ borderRadius: "50%", aspectRatio: '1/1', color: 'white', border: '2px solid white' }}
            >
            </Button>
          </div>
          <div className="xl:col-4 hidden xl:block">
            <Button
              label="Lời bài hát"
              severity="success"
              className='mt-4'
              style={{ borderRadius: "10vh", width: '95%' }}
            />
          </div>
        </div>
        <div className="xl:col-12 hidden xl:flex">
          <div className="col-4 text-center flex flex-column" style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
            <div className="flex" style={{ marginTop: '5vh' }}>
              <img className={`image_spin ${spin ? '' : 'paused'}`} src="https://picsum.photos/350/350" style={{ borderRadius: '50%', aspectRatio: "1", width: '90%', border: '5px solid #30F274' }} alt="Avatar" />
            </div>
          </div>
          <div className="col-4 text-center" style={{ margin: "0 auto" }}>
            <h1>HHHHHHHHHHHHH</h1>
            <h1>HHHHHHHHHHHHH</h1>
            <h1>HHHHHHHHHHHHH</h1>
            <h1>HHHHHHHHHHHH</h1>
            <h1>HHHHHHHHHHHH</h1>
            <h1>HHHHHHHHHHHH</h1>
          </div>
          <div className="xl:col-4 hidden xl:block">
            <ListTrack />
          </div>
        </div>
      </div>
      {/* Ver Mobile*/}
      <div className="mobile_ver" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className="grid">
          <AudioCarousel spin={spin} />
        </div>
      </div>

      <div className="grid">
        <TrackAudio data={data} handleSpin={handleSpin} spin={spin} />
      </div>
      {showMore ? (
        <>
          <div className="col-12 p-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button icon='pi pi-angle-down' label="Show More" onClick={handleClickShow} style={{ background: 'none', border: 'solid 1px white' }} ></Button>
          </div></>
      ) : (
        <>
          <div className="col-12 p-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button icon='pi pi-angle-up' label="Show Less" onClick={handleClickShow} style={{ background: 'none', border: 'solid 1px white' }} ></Button>
          </div>
          <div className="flex flex-column">
            <Relation title='Dành cho bạn' />
            <Relation title='Album Kinh thánh 100 tuần' />
            <RelationBanner />
            <Relation title='Album Kinh thánh 100 tuần' />
          </div>
        </>
      )}
    </>

  );
}

export default Track;