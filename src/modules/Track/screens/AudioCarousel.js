import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import ListTrack from "./ListTrack";

const AudioCarousel = props =>{
    const div1 = (
        <div className="col-9 text-center flex flex-column" style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
          <div className="flex" style={{ marginTop: '5vh' }}>
            <img className={`image_spin ${props.spin ? '' : 'paused'}`} src="https://picsum.photos/350/350" style={{ borderRadius: '50%', aspectRatio: "1", width: '90%', border: '5px solid #30F274',margin:'0 auto'}} alt="Avatar" />
          </div>
        </div>
      );
      
      const div2 = (
        <div className="col-9 text-center" style={{ margin: "0 auto" }}>
          <h1>HHHHHHHHHH</h1>
          <h1>HHHHHHHHHH</h1>
          <h1>HHHHHHHHHH</h1>
          <h1>HHHHHHHHHH</h1>
          <h1>HHHHHHHHHH</h1>
        </div>
      );
      const carouselValue = [div1, div2];
      const itemTemplate = (item) => {
        return (
          <div>
            {item}
          </div>
        );
      };
    return(
        <Carousel value={carouselValue} numVisible={1} numScroll={1} itemTemplate={itemTemplate}></Carousel>
    )
}
export default AudioCarousel