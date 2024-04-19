import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import InputForm from "./Form";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
export const Dialogz = (props) => {
  const {
    header,
    item,
    show,
    setShow,
    handleRadioButtonChange,
    selectedQuality,
    selectedItem,
    isquality,
    buttonlabel,
    multiple,
    input,
  } = props;
  return (
    <>
      <Dialog
        header={header}
        visible={show}
        maximizable={false}
        style={{ width: "25vw" }}
        onHide={() => setShow(false)}
        className="custom-dialog"
      >
        {input && (
          <InputText
            type="text"
            placeholder=" Nhập tên playlist"
            className="my-2 ml-4 input_search"
            style={{ background: "transparent", width: "90%" }}
          />
        )}
        {item.map((child, index) => (
          <li
            className="flex align-items-center px-3 py-2 justify-content-between"
            key={index}
          >
            {child.icon && (
              <i
                className={`pi ${child.icon} text-white`}
                style={{ fontSize: "3vh" }}
              ></i>
            )}

            <div className="flex align-items-center bold flex-row">
              <div className="flex flex-column justify-content-center p-3 gap-2">
                <div
                  className="text-xl text-white no-underline "
                  style={{ fontWeight: "bold" }}
                >
                  {child.name}
                </div>
                <div
                  className=" no-underline text-md"
                  style={{ color: "#bcbcbc", fontWeight: "500" }}
                >
                  {child.subname}
                </div>
              </div>
            </div>
            <div className="flex">
              {multiple ? (
                <InputSwitch
                  checked={selectedItem.includes(index)}
                  onChange={() => handleRadioButtonChange(index)}
                />
              ) : (
                <RadioButton
                  inputId={index}
                  name="category"
                  value={index}
                  checked={selectedItem == index}
                  onChange={() => handleRadioButtonChange(index)}
                />
              )}
            </div>
          </li>
        ))}
        <div className="px-3 pt-4">
          {isquality && (
            <Button
              label={`TẢI XUỐNG (${selectedQuality} MB)`}
              className="w-full"
              style={{ borderRadius: "2vh", backgroundColor: "#ffc700" }}
            />
          )}
          {buttonlabel && (
            <Button
              label={buttonlabel}
              className="w-full"
              style={{ borderRadius: "2vh", backgroundColor: "#ffc700" }}
            />
          )}
        </div>
      </Dialog>
    </>
  );
};
