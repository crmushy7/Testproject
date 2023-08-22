import React from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Customdiv = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div className="flex h-96 xl:h-96 xl:w-full lg:w-full 2xl:w-full w-full ">
      <div className="flex h-full w-full">
        <Card
          style={
            {
              // backgroundColor: "teal",
            }
          }
          title=""
          subTitle=""
          className="h-full justify-evenly bg-teal-200 w-full flex flex-col"
        >
          {/* Top div with heart */}
          <div className="flex  h-6 justify-end p-input-icon-right w-full">
            <span className="flex  h-full justify-end">
              <i className="pi pi-heart hover:cursor-pointer" />
            </span>
          </div>
          {/* Main with picture */}
          <div className="h-80 flex w-full justify-between  flex-col">
            {/* Div with picture */}
            <div className="h-60 w-full ">
              <a
                href={`/Detailpage/${data.id}`}
                className="hover:cursor-pointer"
              >
                <img
                  src={data.productUrl[0]}
                  alt="pc"
                  className="flex h-full animate-none w-full"
                />
              </a>
            </div>
            {/* Div with title and price */}
            <div className="h-7 w-full  flex flex-row justify-between">
              <div className="h-full w-1/2 ">{data.title}</div>
              <div className="h-full w-1/3 ">{data.price}</div>
            </div>
            {/* Button div */}
            <div className="h-10 w-full  flex justify-center items-center">
              <Button
                className="animate-pulse bg-none"
                label="Add To Cart"
                onClick={() => navigate(`/Detailpage/${data.id}`)}
                style={{
                  backgroundColor: "green",
                  height: "60%",
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Customdiv;
