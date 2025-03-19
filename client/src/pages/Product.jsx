import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/main/Footer";
import { Link } from "react-router-dom";
import { usePopup } from "../config/popup";
import { toast } from "react-toastify";
import axios from "axios";
// Component
import Navbar from "../components/store-c/Navbar";
import Size from "../components/product-c/size";
import Service from "../components/product-c/service";
import Quantity from "../components/product-c/quantity";
import Description from "../components/product-c/description";
import Cart from "../components/store-c/cart";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Routes from "../components/main/routes";
import { v4 as uuidv4 } from 'uuid';


function Product() {
  let link = [["Home", "/"], ["Store", "/store"]];

  let { userId } = useParams();
  const [item, setItem] = useState([{}]);
  // Setting Cart
  const [cart, setCart] = useState([]);
  // console.log(cart);

  async function handelCart() {
    let itemObj = {
      name: item.name,
      price: (item.price - discount),
      size: itemInfo.size,
      service: itemInfo.service,
      quantity: itemInfo.quantity,
      image_url: item.image_url,
      id: item.id,
      uuid: uuidv4(),
    };
    setCart([...cart, itemObj]);
    toast.success("Item Added to Cart");
    setNum(JSON.parse(localStorage.getItem("cart"))?.length + 1);
  }
  // UseEffect
  useEffect(() => {
    async function getCart() {
      // Get cart data from local storage
      let cart2 = localStorage.getItem("cart");
      let cartObj = await JSON.parse(cart2);
      if (cartObj != null) {
        setCart(cartObj);
      }
    }
    getCart();

    async function getData(key) {
      console.log(key);
      let data = await fetch(`${import.meta.env.VITE_SERVER_URL}coffee/${key}`);
      let pureData = await data.json();
      console.log(pureData);
      setItem(pureData);
    }
    getData(userId);
  }, []);

  // Storing Cart Data in local storage

  useEffect(() => {
    const SetCart = async () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
    SetCart();
  }, [cart]);


  // For size, service and quantity

  let [itemInfo, setItemInfo] = useState({ size: "S", service: "Sent with Courier", quantity: 1 });
  function handleItemInfo(e) {

    if (typeof (e) === "number") {
      if (e < 1) {
        return;
      }
      setItemInfo({ ...itemInfo, quantity: e });
    }
    else {
      setItemInfo({ ...itemInfo, [e.target.name]: e.target.value })
    }
  }

  // Discount
  let discount = (item.price * 25) / 100;
  discount = Math.round(discount * 100) / 100;

  // Cart state
  let {
    popup,
    handelPopcart,
    signup,
    handelsignup,
    login,
    handellogin,
    setNum,
  } = usePopup();

  return (
    <div>
      {/* Cart */}
      {popup ? <Cart quit={handelPopcart} prevCart={setCart}/> : null}
      {signup ? <Signup quit={handelsignup} /> : null}
      {login ? <Login quit={handellogin}  /> : null}
      <Navbar />
      {/* Link for Home and store */}

      {/* Product */}
      {/* Left */}
      <div className="px-[5%]">
        <Routes Rout={link} btn="Product" />
      </div>
      <div className="flex sm:px-[5%] gap-10 justify-center max-sm:flex-col max-sm:items-center">
        <div className="w-2/5 pt-10 max-md:w-3/6 max-sm:w-4/5 max-xs:w-[97%]">
          <div className="sticky top-48 bg-gray-100 rounded-3xl -z-10 w-full">
            <img src={item.image_url} alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="w-3/5 sm:px-10 py-5 flex flex-col gap-5 max-md:w-3/6 max-sm:w-4/5">
          <div className="border-b-2 pb-4">
            <h1 className="text-5xl mb-4 font-bold max-cd:text-4xl">{item.name}</h1>
            <h2 className="text-3xl font-medium">
            &#8377;{(item.price - discount)}{" "}
              <span className="line-through text-xl text-gray-500 ml-4">
                {item.price}
              </span>
            </h2>
          </div>
          <div className="border-b-2 pb-8">
            {/* Size service and add to cart option */}
            <div className="flex gap-12 flex-col w-full">
              <Size handelSize={handleItemInfo} size={itemInfo.size} />
              <Service handelService={handleItemInfo} service={itemInfo.service} />
              <Quantity handleQuantity={handleItemInfo} quantity={itemInfo.quantity} />
              <div className="flex">
                <button
                  className=" border rounded-3xl bg-black text-white text-xl w-40 py-2 active:bg-gray-500"
                  onClick={handelCart}
                >
                  Add to Cart
                </button>
              </div>
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
