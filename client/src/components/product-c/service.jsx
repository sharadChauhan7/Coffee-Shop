import React from "react";

function service({ handelService, service }) {
    let text = ["Courier", "Drive Thru", "In Place"];
    let style;
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-4xl font-bold max-cd:text-3xl ">Service</h1>
      <div
        className="flex gap-2 w-full"
        onChange={(e) => {
          handelService(e);
        }}
      >
        {text.map((value, index) => {
          {
            if (value === service) {
              style = "bg-black text-white text-xl px-6 py-2 xs:mx-2 max-md:px-2 ";
            } else {
              style = "border text-xl px-6 bg-gray-200 py-2 xs:mx-2 max-md:px-2 ";
            }
          }
          return (
            <div key={index}>
              <input
                type="radio"
                name="service"
                id={value}
                value={value}
                className="hidden"
              />
              <label htmlFor={value} >
                <div className={`${style} max-md:text-base border-2 min-w-20` }>{value}</div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default service;
