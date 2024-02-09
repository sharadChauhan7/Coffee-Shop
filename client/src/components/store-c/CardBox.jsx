import React from 'react'
import { useEffect,useState } from 'react'
import Card from './card'
<<<<<<< HEAD
import axios from "axios"

function CardBox({items,style="",filteredData=null}) {
  // Setting Data

    let [products,setProducts]=useState([{}]);

=======
function CardBox({items,style=""}) {
  // Setting Data

    let [products,setProducts]=useState([{}]);
>>>>>>> ea257d940443f721dfc1d0381627d21faa0a716b
    useEffect( ()=>{
      async function getData(items){
        let data =await fetch(`https://fake-coffee-api.vercel.app/api?limit=${items}`);
        let pureData= await data.json();
        setProducts(pureData);
      }
<<<<<<< HEAD
      if(filteredData==null){
        getData();
      }
      else{
        setProducts(filteredData);
      }
    },[filteredData]);


  return (
    <div className={`grid ${style} place-items-center gap-10`}>
      {products?products.length>0?products.map((value,index)=>{
        return <Card data={value} key={index}/>
      }):<h1 className='px-5 text-5xl w-[30vw]'>Sorry NO Data Found.............</h1>:<h1 className='text-5xl w-[30vw] px-5 '>Loading............</h1>}
=======
      getData(items); 

    },[]);

  return (
    <div className={`grid ${style} place-items-center gap-10`}>
      {products.map((value,index)=>{
        return <Card data={value} key={index}/>
      })}
>>>>>>> ea257d940443f721dfc1d0381627d21faa0a716b
    </div>
  )
}

export default CardBox