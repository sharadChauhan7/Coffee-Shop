import React from 'react'
import { useEffect,useState } from 'react'
import Card from './card'
function CardBox({items}) {
  // Setting Data

    let [product,setProduct]=useState([{}]);
    useEffect( ()=>{
      async function getData(items){
        let data =await fetch(`https://fake-coffee-api.vercel.app/api?limit=${items}`);
        let pureData= await data.json();
        console.log("Working");
        setProduct(pureData);
      }
      getData(items);

    },[]);

  return (
    <div className='flex justify-between'>
      {product.map((value,index)=>{
        return <Card data={value} key={index}/>
      })}
      {/* <Card/> */}
    </div>
  )
}

export default CardBox