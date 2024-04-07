import React from "react";
import { Link } from "react-router-dom";
function card({ data }) {
  return (
    <div className="w-60 h-72  overflow-hidden shadow-md rounded-3xl  max-xs:w-72 max-xs:h-80 border mx-1 flex-none">
        <Link
          to={`/user/product/${data.id}`}
        >
        <img src={data.image_url} className="w-full h-3/4" alt="Loading....." />
        <div className="h-20 p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-bold">{data.name}</h1>
            <h1 className="w-14 text-center rounded-xl border">
              {" "}
              &#8377;{data.price*80}
            </h1>
          </div>
          <p className="text-sm">Region: {data.region}</p>
        </div>
    </Link>
      </div>
  );
}

export default card;
