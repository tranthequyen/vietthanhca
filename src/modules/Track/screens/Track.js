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
import { Link } from "react-router-dom";


function Track() {
  const[spin,setSpin] = useState(false)
  const handleSpin = () =>{
    setSpin(!spin)
  }
  return (
    <>
    <div className="grid">
      <div className="col-4 text-center flex flex-column" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="flex flex-row p-4">
          <Link to={'/'}>
          <Button
               text
               className='button mr-4'
               style={{borderRadius:"50%",aspectRatio:'1/1',border:'2px solid white',color:'white'}}
           > 
               <span className="pi pi-arrow-left"></span>
           </Button>
          </Link>
           <Button
               text
               className='button mr-4'
               style={{borderRadius:"50%",aspectRatio:'1/1',color:'white',border:'2px solid white'}}
           > 
               <span className="pi pi-spin pi-cog"></span>
           </Button>
           <Button
               text
               className='button mr-4'
               style={{borderRadius:"50%",aspectRatio:'1/1',color:'white',border:'2px solid white'}}
           > 
               <span className="pi pi-star-fill"></span>
           </Button>
           <Button
               text
               className='button mr-4'
               style={{borderRadius:"50%",aspectRatio:'1/1',color:'white',border:'2px solid white'}}
           > 
               <span className="pi pi-arrows-v" style={{transform: 'rotate(45deg)'}}></span>
           </Button>
        </div>
        <div className="flex" style={{marginTop:'5vh'}}>
          <img className={`image_spin ${spin ? '' : 'paused'}`} src="https://picsum.photos/350/350" style={{ borderRadius: '50%',aspectRatio:"1"}} alt="Avatar" />
        </div>
      </div>
      <div className="col-4 text-center">
      <Button 
        label="Lời bài hát" 
        severity="success" 
        className='mt-4'
        style={{borderRadius:"10vh",width:'95%'}}   
        />
      </div>
      <div className="col-4 text-center" style={{padding:'2%'}}>
        <ListTrack />
      </div>
    </div>
    <div className="grid">
       <TrackAudio handleSpin={handleSpin} spin={spin}/>
    </div>
    <div className="flex flex-column">
      <Relation title='Dành cho bạn' />
      <Relation title='Album Kinh thánh 100 tuần' />
      <RelationBanner/>
      <Relation title='Album Kinh thánh 100 tuần' />
    </div>
    </>
    
  );
}

export default Track;