import React from "react";
import "primeicons/primeicons.css";
import Online from "../images/Online.jpg";
import { Card } from "primereact/card";

const Smalldiv = (props) => {
  const { data } = props;
  return (
    <div className="flex h-full xl:h-96 xl:w-full lg:w-full 2xl:w-full w-full ">
      <div className="flex h-full w-full">
        <img src={data} alt="pc" className="flex h-full animate-none w-full" />
      </div>
    </div>
  );
};

export default Smalldiv;
