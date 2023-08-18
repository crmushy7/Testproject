import React, { useEffect } from "react";
import Leftpic from "../images/Picused.jpg";

import "primeicons/primeicons.css";
import axios from "axios";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios.post(`http://192.168.150.152:3000/auth/login`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  const Postdata = (e) => {
    e.preventDefault();
    axios
      .post(`http://192.168.150.152:3000/auth/login`, { email, password })
      .then((res) => {
        console.log(res);
        // setData(res.data);
      });
  };
  return (
    <div className="bg-blue-300 h-screen w-full flex justify-center items-center ">
      <div className=" h-3/6 w-5/6 rounded-sm shadow-md bg-white flex flex-row">
        <div className="w-1/2 h-full rounded-sm ">
          <div className="h-full flex">
            <img src={Leftpic} alt="pic" className="flex h-full w-full" />
          </div>
        </div>
        <div className="w-1/2  h-full justify-center items-center rounded-sm  flex flex-col">
          <div className="flex border border-black justify-between w-5/6  h-full flex-col">
            <div className="h-1/6 flex flex-col">
              <div className="flex w-full h-full">
                <p className="text-blue-600 font-bold font-sans sm:text-lg lg:text-2xl 2xl:text-3xl ">
                  Welcome to E-commerce
                </p>
              </div>
              <div className="flex justify-start w-full">
                <p className="text-blue-600 font-bold font-sans text-1xl italic">
                  Ship Smarter with Today
                </p>
              </div>
            </div>
            <div className="flex h-3/6 flex-col  border border-blue-500  mt-5 w-5/6 gap-5 justify-evenly items-center">
              <span className=" p-input-icon-left w-full">
                <i className="pi pi-user" />
                <InputText
                  className="w-full h-5/6"
                  placeholder="First name "
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </span>{" "}
              <span className=" p-input-icon-left w-full">
                <i className="pi pi-user" />
                <InputText
                  className="w-full h-5/6"
                  placeholder="Middle name "
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
                />
              </span>
              <span className=" p-input-icon-left w-full">
                <i className="pi pi-user" />
                <InputText
                  className="w-full h-5/6"
                  placeholder="Last name "
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </span>
              <span className=" p-input-icon-left w-full">
                <i className="pi pi-envelope" />
                <InputText
                  className="w-full h-5/6"
                  placeholder="Username or email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span className=" p-input-icon-right w-full">
                <i
                  className="pi pi-eye"
                  onClick={() => {
                    window.alert(password);
                  }}
                />

                <InputText
                  className="w-full h-5/6"
                  placeholder="Password "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <span className=" p-input-icon-right w-full">
                <i
                  className="pi pi-eye"
                  onClick={() => {
                    window.alert(confirmPassword);
                  }}
                />

                <InputText
                  className="w-full h-5/6"
                  placeholder="Confirm Password "
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </span>
            </div>
            <div className="flex border border-red-500  w-5/6 h-1/6  justify-between items-center">
              <div className="w-32 h-3/6  text-xl items-center flex justify-between ">
                <div className="h-full flex justify-center items-center w-1/3">
                  <input
                    className="w-full h-4/6 border border-blue-400   "
                    type="checkbox"
                    class="default:ring-2 ..."
                  />
                </div>
                <div className="w-2/3">
                  <p className="text-xs font-bold">Remember me</p>
                </div>
              </div>
              <div>
                <a>
                  <p className="hover:text-blue-700 text-blue-500 hover:cursor-pointer text-xs ">
                    Forgot Password?
                  </p>
                </a>
              </div>
            </div>
            <div className="flex  w-5/6 h-1/6  justify-center items-center">
              <Button
                label="Sign in"
                icon="pi pi-sign-in"
                iconPos="right"
                onClick={Postdata}
                // onClick={() => navigate("/Homepage")}
                style={{
                  backgroundColor: "blue",
                  height: "60%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
