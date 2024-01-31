import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/store-c/Navbar";
import Footer from "../components/main/Footer";
import { Link } from "react-router-dom";
import Size from "../components/product-c/size";
import Service from "../components/product-c/service";
import Quantity from "../components/product-c/quantity";
import Description from "../components/product-c/description";
import Cart from "../components/store-c/cart";
import axios from 'axios';

function Product() {
  let { userId } = useParams();
  let [item, setItem] = useState([{}]);
  useEffect(() => {

    // Retrieve cart data from sessionStorage when the app starts
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    async function getData(key) {
      let data = await fetch(`https://fake-coffee-api.vercel.app/api/${key}`);
      let pureData = await data.json();
      setItem(pureData[0]);
    }
    getData(userId);
  }, []);
  // For Size
  let [size, setSize] = useState("S");
  function handelSize(e) {
    setSize(e.target.value);
  }
  // For Service
  let [service, setService] = useState("Sent with Courier");
  function handelService(e) {
    setService(e.target.value);
  }
  // For Quantity
  let [quantity, setQuantity] = useState(1);

  function handelQuantity(num) {
    if (num < 1) {
      return;
    }
    setQuantity(num);
  }


  // Discount
  let discount = (item.price * 25) / 100;
  discount = Math.round(discount * 100) / 100;

  // Cart state

  let [popcart,setPopcart]=useState(false);
  function handelPopcart(){
    setPopcart(!popcart);
  }

  let [cart, setCart] = useState([]);
  async function handelCart() {
    let itemObj = {
      name: item.name,
      price: item.price,
      size: size,
      service: service,
      quantity: quantity,
      image_url: item.image_url,
      id: item.id,
    };

    // Store cart data in node sesseion storage
    const savedCart = async()=>{
      const res=await axios.post('http://localhost:3000/cart',itemObj,{
        withCredentials: true, // Ensure cookies are sent with the request
      });
      console.log(res);
    }
    savedCart();

    setCart([...cart, itemObj]);
  }


  return (
    <div>
      {/* Cart */}
        {popcart?<Cart quit={handelPopcart} cartItems={cart}/>:null}
      <Navbar handelcart={handelPopcart} cartItems={cart} />
      {/* Link for Home and store */}
      <div className="px-[5%] text-3xl my-10 mt-32">
        <Link
          className="navbar-item text-gray-500"
          activeclassname="is-active"
          to="/"
        >
          Home{" "}
        </Link>{" "}
        |{" "}
        <Link
          className="navbar-item text-gray-500"
          activeclassname="is-active"
          to="/store"
        >
          Store
        </Link>{" "}
        | <button className="text-black">Product</button>
      </div>

      {/* Product */}
      {/* Left */}
      <div className="flex px-[5%] gap-10 justify-center">
        <div className="w-2/5 pt-10">
          <div  className="sticky top-48 bg-gray-100 rounded-3xl -z-10">
            <img src={item.image_url} alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="w-3/5 px-10 py-5 flex flex-col gap-5">
          <div className="border-b-2 pb-4">
            <h1 className="text-5xl mb-4 font-bold">{item.name}</h1>
            <h2 className="text-3xl font-medium">
              &#36;{item.price - discount}{" "}
              <span className="line-through text-xl text-gray-500 ml-4">
                {item.price}
              </span>
            </h2>
          </div>
          <div className="border-b-2 pb-8">
            {/* Size service and add to cart option */}
            <div className="flex gap-12 flex-col">
              <Size handelSize={handelSize} size={size} />
              <Service handelService={handelService} service={service} />
              <Quantity handleQuantity={handelQuantity} quantity={quantity} />
              <button className=" border rounded-3xl bg-black text-white text-xl w-40 py-2 active:bg-gray-500" onClick={handelCart}>Add to Cart</button>
            </div>
          </div>
          <Description
            description={item.description}
            roast={item.roast_level}
            profile={item.flavor_profile}
            grind={item.grind_option}
          />
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default Product;
