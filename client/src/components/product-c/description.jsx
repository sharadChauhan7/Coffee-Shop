import React from "react";

function description({description,roast,profile,grind }) {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold mb-3">Description</h1>
       {profile? <p className="text-xl text-gray-500">
          {description}With the roasting level of {roast} and the Taste and
          Aromatic characteristics of {
            profile.map((value,index)=>{return <span key={index}>{value}, </span>})
          } This coffee is a must try.
        </p>:<p className="text-xl text-gray-500">
          Loading......
        </p>}

        <h1 className="text-4xl font-bold mb-3 mt-8">Grind Options</h1>
        <div className="text-xl text-gray-500 flex flex-col">
            {
                grind?grind.map((value,index)=>{
                    return <span key={index}>{index+1}.{value} </span>
                }):<span>Loading.......</span>
            }
        </div>
      </div>
    </>
  );
}

export default description;
