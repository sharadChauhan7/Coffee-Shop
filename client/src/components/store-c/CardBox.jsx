import React from 'react'
import { useEffect, useState } from 'react'
import Card from './card'
import axios from "axios"
import { usePopup } from '../../config/popup'
import {searchBar} from '../../util/filter'

function CardBox({ items, style = "", filteredData = null }) {
  // Setting Data

  let [products, setProducts] = useState([{}]);
  let { search, setSearch } = usePopup();
  let [allitems,setAllitems]=useState([{}]);


  useEffect(() => {
    async function getData(items) {
      let data = await fetch(`http://localhost:3000/coffee?limit=${items}`);
      let pureData = await data.json();
      setAllitems(pureData);
      setProducts(pureData);
    }
    if (filteredData == null) {
      getData(items);
    }
    else {
      setProducts(filteredData);
    }
  }, [filteredData]);

  // Search
  useEffect(() => {
    let newobj=searchBar(products,allitems,search);
    if(newobj && newobj.length){
      setProducts(newobj);
    }
  }, [search]);

  return (
    <div className={` ${style} place-items-center gap-10 mx-1 `}>
      {products ? products.length > 0 ? products.map((value, index) => {
        return <Card data={value} key={index} />
      }) : <h1 className='xs:px-5 text-5xl w-[30vw]'>Sorry NO Data Found.............</h1> : <h1 className='text-5xl w-[30vw] px-5 '>Loading............</h1>}
    </div>
  )
}

export default CardBox