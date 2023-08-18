import React from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import { Card } from "primereact/card";

const Smalldiv = (props) => {
  const { data } = props;
  const url = Object.values(data)[0];
  return (
    <div className="flex h-10 md:w-24 md:h-24 xl:h-60 xl:w-56 lg:w-44 2xl:h-60 2xl:w-full w-20 sm:w-18 sm:h-20 ">
      <div className="flex h-full w-full">
        <img src={url} alt="pc" className="flex h-full animate-none w-full" />
      </div>
    </div>
  );
};

export default Smalldiv;
