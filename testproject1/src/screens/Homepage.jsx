import React, { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import Customdiv from "./Customdiv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const carts = useSelector((item) => item.name.cart);
  useEffect(() => {
    axios
      .get(`http://192.168.150.152:3000/products/retrieve-products`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  const firtsImages = data?.map((item, id) => {
    return item.productUrl[0].img1;
  });
  return (
    <div className="h-auto w-screen bg-stone-100 flex flex-col justify-evenly items-center">
      <div className="flex justify-center items-center h-auto w-full">
        <div className="h-full justify-between w-5/6  flex flex-col">
          {/* Header div */}

          <div
            className="flex flex-row items-center h-1/5  w-full justify-between mb-2.5"
            style={{
              height: "15%",
            }}
          >
            <div className="h-full w-2/6  flex items-center justify-start">
              <i className="pi pi-cart-plus text-green-600 " />
              <p>Shopcart</p>
            </div>
            <div className="h-full w-1/3  flex flex-row">
              <div className="h-full w-3/6  flex items-center justify-end">
                <i className="pi pi-user" />
                <p className="pl-1.5 hover:cursor-pointer">Account</p>
              </div>
              <div className="h-full w-3/6 flex items-center justify-end">
                <div className="flex w-2/3 h-full  flex-row">
                  <div className="flex w-2/3 justify-center items-center  h-full">
                    <i className="pi pi-cart-plus text-green-600 animate-bounce" />
                    <p
                      className="hover:cursor-pointer"
                      onClick={() => navigate("/Cartitems")}
                    >
                      Cart
                    </p>
                  </div>
                  <div className="flex justify-start items-start">
                    {carts.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main center div */}

          <div className="flex justify-between flex-col h-5/6 w-full mb-3 ">
            {/* Top main div */}
            <div className="flex flex-row justify-center items-center h-1/3 mb-2.5  w-full bg-cyan-100">
              <div className="flex w-1/2 h-full justify-center items-center ">
                <div className="flex h-full w-full justify-center items-center">
                  <p className="text-cyan-700 text-xl text-center font-sans font-bold animate-pulse">
                    "Join us online for unbeatable deals! Have up to 50%. Happy
                    shopping with us!"
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 h-full  ">
                <img
                  src={Online}
                  alt="pc"
                  className="flex h-full animate-none w-full"
                />
              </div>
            </div>
            {/* Mapping the cards */}
            <div className="h-5/6 w-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-3">
              {data?.map((data, index) => (
                <Customdiv key={index} data={data} />
              ))}
            </div>
          </div>
          {/* footer */}

          <div
            className="flex flex-col  bg-cyan-200 justify-center items-center  w-full "
            style={{
              height: "5%",
            }}
          >
            <p className="animate-pulse text-center font-sans text-black">
              "Explore, shop, and indulge - This is your ultimate online
              destination."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
