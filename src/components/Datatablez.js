import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
export const Columnz = (props) => {
  const { ...prop } = props;
  return <Column className="text-center" {...prop} />;
};
const DataTablez = ({ value, children, noAction }) => {
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button icon="pi pi-file-edit" className=" p-button-success p-mr-2" />
        <Button icon="pi pi-trash" className=" p-button-danger" />
      </div>
    );
  };

  const indexBodyTemplate = (rowData, row) => {
    return (
      <span
        className="text"
        style={{ fontWeight: "bold", fontSize: "3vh", color: "	#686868" }}
      >
        {" "}
        {row.rowIndex + 1}
      </span>
    );
  };
  const newChildren = [
    <Columnz
      key="stt"
      body={indexBodyTemplate}
      header="#"
      className="text-center"
      style={{ width: "7%", padding: "2vh" }}
    ></Columnz>, // Đặt chiều rộng thành 7%
    ...React.Children.toArray(children),
  ];
  if (!noAction) {
    newChildren.push(
      <Columnz
        key="action"
        body={actionBodyTemplate}
        header="Hành động"
      ></Columnz>
    );
  }

  return <DataTable value={value}>{newChildren}</DataTable>;
};

export default DataTablez;
