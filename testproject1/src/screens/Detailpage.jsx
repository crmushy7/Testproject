import React, { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import Customdiv from "./Customdiv";
import Smalldiv from "./Smalldiv";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart";
import { useSelector } from "react-redux";

const Detailpage = () => {
  const { id } = useParams();
  const carts = useSelector((item) => item.name.cart);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const items = [2];
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const Substraction = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount((prevcount) => prevcount - 1);
    }
  };
  const Afterclick = () => {
    dispatch(addToCart(data));
    setd;
  };

  useEffect(() => {
    axios
      .get(`http://192.168.150.152:3000/products/${id}/product`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div className="h-screen w-screen bg-stone-100 flex flex-col justify-evenly items-center">
      <div className="flex justify-center items-center h-5/6 w-full">
        <div className="h-full justify-center items-center w-5/6  flex flex-col">
          {/* Header div */}

          <div
            className="flex flex-row items-center h-1/5 border  w-full justify-between "
            style={{
              height: "5%",
            }}
          >
            <div className="h-full w-2/6  flex items-center justify-start">
              <i className="pi pi-cart-plus text-green-600 " />
              <p
                onClick={() => navigate("/Homepage")}
                className="hover:cursor-pointer"
              >
                Shopcart
              </p>
            </div>
            <div className="h-full w-1/3  flex flex-row">
              <div className="h-full w-3/6  flex items-center justify-end">
                <i className="pi pi-user" />
                <p className="pl-1.5 hover:cursor-pointer">Account</p>
              </div>
              <div className="h-full  w-3/6 flex items-center justify-end">
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

          <div className="flex justify-center flex-col h-5/6 w-full  ">
            <div className="flex flex-row justify-center items-center h-full   w-full ">
              <div className="flex w-1/2 h-full justify-center flex-col pr-2  items-center ">
                <div className="flex h-1/2  w-full  ">
                  {/* Mapping the cards */}

                  {/* <Smalldiv data={data} /> */}
                  <img
                    src={data?.productUrl[0]}
                    alt="pc"
                    className="flex w-full h-full "
                  />
                </div>
                <div className="h-1/2 mt-3 border w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4">
                  {data?.productUrl.map((img, index) => (
                    <Smalldiv key={index} data={img} />
                  ))}
                </div>
              </div>
              <div className="flex w-1/2 h-full justify-around  flex-col ">
                <div className="h-1/3 w-full  flex flex-col">
                  <div className="h-1/4 w-full ">
                    <p className="font-sans font-bold">{data?.title}</p>
                    <p>Description:</p>
                  </div>
                  <div className="h-2/3 w-full ">
                    {" "}
                    <p className="font-sans ">{data?.description}</p>
                  </div>
                </div>
                <div className="h-2/6 w-full  flex flex-col">
                  <div className="h-1/3 w-full ">
                    <p>Rating:</p>
                    <i className="pi pi-star-fill" />

                    <i className="pi pi-star-fill" />

                    <i className="pi pi-star-fill" />

                    <i className="pi pi-star-fill" />

                    <i className="pi pi-star-fill" />

                    <i className="pi pi-star" />
                  </div>
                  <div className="h-1/3 w-full  flex items-end ">
                    <p>
                      <span>Price:</span>
                      <span className="font-bold">{data?.price}Tsh</span>
                    </p>
                  </div>
                  <div className="h-1/3 w-full ">
                    <p>Get the {data?.title} with a good discount!</p>
                  </div>
                  <div className="h-1/3 w-full ">
                    <p>
                      Discount:{" "}
                      <span className="font-bold">{data?.discount}Tsh</span>
                    </p>
                  </div>
                </div>
                <div className="h-1/6 w-full  flex flex-col">
                  <div className="h-1/3 w-full flex justify-center items-center">
                    {/* <div className="h-full w-1/2  rounded-full border border-black flex flex-row ">
                      <div
                        onClick={Substraction}
                        className="h-full  w-1/3 flex justify-center items-center hover:cursor-pointer "
                      >
                        <span className="font-bold">-</span>
                      </div>
                      <div className="h-full flex justify-center items-center w-1/3 ">
                        <span>{count}</span>
                      </div>
                      <div
                        onClick={() => setCount((prevcount) => prevcount + 1)}
                        className="h-full  flex justify-center items-center w-1/3 hover:cursor-pointer"
                      >
                        <span className="font-bold">+</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="h-1/3 w-full flex justify-center  ">
                    <span>
                      Only <span>{data?.productInStock}</span> items left
                    </span>
                  </div>
                  <div className="h-1/3 w-full  flex justify-center">
                    <Button
                      className="animate-pulse bg-none"
                      id="cartbutton"
                      label="Add To Cart"
                      onClick={Afterclick}
                      style={{
                        backgroundColor: "green",
                        height: "60%",
                      }}
                    />
                  </div>
                </div>
                <div className="h-1/6 w-full  flex flex-col">
                  <p>
                    " Delight in premium shopping with our carefully curated
                    products. Enjoy fast, secure shipping, quality assurance,
                    and the convenience of free delivery. Join our global
                    community and start shopping now!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
