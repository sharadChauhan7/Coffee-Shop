import React from 'react'
import Navbar from '../components/store-c/Navbar'
import Cart from '../components/store-c/cart'
import Footer from '../components/main/Footer'
import Routes from '../components/main/routes'
import UserInfo from '../components/checkout/userinfo'
import axios from 'axios'
import { usePopup } from '../config/popup'


function checkout() {
  const link = [["Home", "/"], ["Store", "/store"]];

  // hmr indavidate Because of this below line
  const { popup, handelPopcart } = usePopup();

  // Total Amount
  const userdata = JSON.parse(localStorage.getItem('user')).providerData[0];
  const cartProducts = JSON.parse(localStorage.getItem('cart'));

  let total = 0;
  if (cartProducts != null) {
    for (let i = 0; i < cartProducts.length; i++) {
      total = total + cartProducts[i].price*cartProducts[i].quantity;
    }
  }

  async function handelCheckout() {
    let order = await axios.post('http://localhost:3000/payment/checkout', { amount: (total * 100) });
    order = order.data;
    let key_id = await axios.get('http://localhost:3000/payment/key');
    key_id = key_id.data.key_id;
    const options = {
      "key": key_id, // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Sharad Chauhan",
      "description": "Testing Transaction",
      "image": "data:image/png;base64,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",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:3000/payment/verification",
      "prefill": {
        "name": userdata.displayName,
        "email": userdata.email,
        "contact": userdata.phoneNumber,
      },
      "notes": {
        "address": "My address"
      },
      "theme": {
        "color": "#121212"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }

  return (
    <div>
      <Navbar />
      {popup ? <Cart quit={handelPopcart} /> : null}
      <div className="body px-[5%]">
        <Routes Rout={link} btn="Checkout" />
        <UserInfo handler={handelCheckout} total={total} />

      </div>
      <Footer />
    </div>
  )
}

export default checkout