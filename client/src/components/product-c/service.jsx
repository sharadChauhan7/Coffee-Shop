import React from "react";

function service({ handelService, service }) {
    let text = ["Sent with Courier", "Drive Thru", "In Place"];
    let style;
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Service</h1>
      <div
        className="flex gap-2"
        onChange={(e) => {
          handelService(e);
        }}
      >
        {text.map((value, index) => {
          {
            if (value === service) {
              style = "bg-black text-white text-xl px-6 py-2 mx-2";
            } else {
              style = "border text-xl px-6 bg-gray-200 py-2 mx-2";
            }
          }
          return (
            <div key={index}>
              <input
                type="radio"
                name="size"
                id={value}
                value={value}
                className=" hidden"
              />
              <label htmlFor={value} className={style}>
                {value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default service;
