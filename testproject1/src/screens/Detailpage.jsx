import React, { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import Customdiv from "./Customdiv";
import Smalldiv from "./Smalldiv";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detailpage = () => {
  const { id } = useParams();
  const items = [2];
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://192.168.150.152:3000/products/retrieve-products/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);
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
                <i className="pi pi-cart-plus text-green-600 animate-bounce" />
                <p className="hover:cursor-pointer">Cart</p>
              </div>
            </div>
          </div>
          {/* main center div */}

          <div className="flex justify-between flex-col h-5/6 w-full mb-3 ">
            <div className="flex border border-blue-600 flex-row justify-center items-center h-auto mb-2.5  w-full ">
              <div className="flex w-1/2 h-full justify-center flex-col items-center ">
                <div className="flex h-1/2 border border-black w-full justify-center ">
                  {/* Mapping the cards */}
                  <div className="h-full w-full border border-green-900  flex">
                    {/* <Smalldiv data={data} /> */}
                    <img
                      src={data?.data}
                      alt="pc"
                      className="flex h-full animate-none w-full"
                    />
                  </div>
                </div>
                <div className="h-5/6 w-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-3">
                  {data?.productUrl.map((data, index) => (
                    <Smalldiv key={index} data={data} />
                  ))}
                </div>
              </div>
              <div className="flex w-1/2 h-full  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
