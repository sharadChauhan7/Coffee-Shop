async function filData(filters){
    let data= await getData();
    let newData= data.filter((value,index)=>{
        if(value.price*80<=filters.price){

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
async function getData(items=20){
    let data =await fetch(`https://fake-coffee-api.vercel.app/api?limit=${items}`);
    let pureData= await data.json();
    return pureData;
  }
// Export this function so it can be used by store.jsx
export  {filData,getData};