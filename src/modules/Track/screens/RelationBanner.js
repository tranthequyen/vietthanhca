import { test } from "@/axios/test";
import { Carousel } from "primereact/carousel";

function RelationBanner() {
  const itemTemplate = (item) => {
    return (
      <img
        className="border-round-lg"
        src="https://picsum.photos/200/300"
        alt={item.alt}
        style={{
          width: "90%",
          aspectRatio: "1.75",
          maxHeight: "350px",
          margin: "0 auto",
        }}
      />
    );
  };
  return (
    <div className="col-12 xl:col-9" style={{ margin: "0 auto" }}>
      <Carousel
        value={test.slice(0, 20).map((d) => d.url)}
        numVisible={1}
        numScroll={1}
        itemTemplate={itemTemplate}
      ></Carousel>
    </div>
  );
}
export default RelationBanner;
