import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Smallcartdiv from "./Smallcartdiv";
import { Axios } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Clearcart } from "../redux/Cart";

const CartItems = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carts = useSelector((item) => item.name.cart);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-row h-full p-1">
          <i className="pi pi-cart-plus text-green-600 " />
          <p
            onClick={() => navigate("/Homepage")}
            className="hover:cursor-pointer"
          >
            Shopcart
          </p>
        </div>{" "}
        <button
          className="bg-red-600 rounded-full p-1"
          onClick={() => dispatch(Clearcart())}
        >
          CLEAR CART
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "10%",
        }}
      >
        {carts?.map((item, index) => (
          <Smallcartdiv data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
