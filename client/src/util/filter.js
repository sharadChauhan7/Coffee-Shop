import { func } from "joi";

async function filData(filters){
    let data= await getData();
    let newData= data.filter((value,index)=>{
        if(value.price<=filters.price){

            if((filters.grind_option!="" && filters.region!="")){
            return( (value.grind_option.includes(filters.grind_option) && value.region.includes(filters.region)) && (value.price*80)<=filters.price);
            }
            else if(filters.grind_option!=""){
            return( value.grind_option.includes(filters.grind_option) && value.price<=filters.price);
            }
            else{
            return(value.region.includes(filters.region)  && value.price<=filters.price);
            }
    }
    });
    return newData;
}
async function getData(){
    let data =await fetch(`http://localhost:3000/coffee`);
    let pureData= await data.json();
    return pureData;
  }
// Export this function so it can be used by store.jsx

// Search
function searchBar(products,allitems,search){

    let len=search.length;
    if (Object.keys(products[0]).length != 0) {
        let newobj = allitems.filter((item, data) => {
          let value = item.name.slice(0, len);
          let region=item.region.slice(0,len);
          value = value.toUpperCase();
          region=region.toUpperCase();
  
          let srch = search.toUpperCase();
            return ((value==srch)|| (region==srch));
        });
        return newobj;
    }
}
export  {filData,getData,searchBar};