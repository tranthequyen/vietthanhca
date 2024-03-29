import { test } from "@/axios/test";
import { Cardz } from "@/components/Card";
import Title from "@/components/Title";

function Relation({ title, src }) {
  return (
    <div className="col-12" style={{ margin: "0 auto" }}>
      <Title title={title} icon="pi-angle-double-right" subTitle="Xem thêm" />
      <div className="grid">
        {test.slice(0, 6).map((d) => (
          <div className="col-6 lg:col-4 xl:col-2">
            <Cardz song="Cảm mến ân tình" src={src} sing="Thế Quyền" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Relation;
