import React from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import Customdiv from "./Customdiv";
import { VirtualScroller } from "primereact/virtualscroller";

const Homepage = () => {
  const items = [
    1, 2, 3, 2, 3, 2, 2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 3, 4,
    43, 3, 2, 2, 1, 1, 2, 2,
  ];
  return (
    <div className="h-screen w-screen bg-stone-100 flex flex-col justify-evenly items-center">
      <div className="flex justify-center items-center h-full w-full">
        <div className="h-5/6 justify-between w-5/6 border border-black flex flex-col">
          <div
            className="flex flex-row items-center  w-full border border-black justify-between"
            style={{
              height: "5%",
            }}
          >
            <div className="h-full w-2/6 border border-black flex items-center justify-start">
              <i className="pi pi-cart-plus text-green-600" />
              <p>Shopcart</p>
            </div>
            <div className="h-full w-2/5 border border-black flex flex-row">
              <div className="h-full w-3/6 border border-black flex items-center justify-start">
                <i className="pi pi-user" />
                <p className="pl-1.5">Account</p>
              </div>
              <div className="h-full w-3/6 border border-black flex items-center justify-start">
                <i className="pi pi-cart-plus text-green-600" />
                <p>Cart</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col h-5/6 w-full border border-black">
            <div className="flex flex-row h-1/3 border border-blue-500 w-full">
              <div className="flex w-1/2 h-full justify-center items-center border border-black bg-stone-200">
                <div>
                  <p className="text-cyan-700 text-xl font-sans font-bold animate-pulse">
                    "Join us online for unbeatable deals!{" "}
                    <Script:src></Script:src>
                    Have up to 50%. Happy shopping with us!"
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 h-full border border-black ">
                <img src={Online} alt="pc" className="flex h-full w-full" />
              </div>
            </div>
            <div className="h-3/5 w-full border border-red-500 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 2xl:grid-cols-12 gap-3">
              {items?.map((item, index) => (
                <Customdiv key={index} />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col  w-full border border-black"
            style={{
              height: "5%",
            }}
          >
            Footer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
