import React from "react";
import Header from "../../../Header";
import Sidebar from "../../../Sidebar";
import Body from "./Body";
import { Navigate } from "react-router-dom";
import {decrypt} from "../../../../../redux/encryption";

const Password = () => {
const StudentUser = JSON.parse(decrypt(localStorage.getItem("user")));
if (StudentUser.result.position === "Student") {
      return (
        <div className="bg-[#d6d9e0] h-screen mobile:h-full tablet:h-full flex items-center justify-center">
          <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 ">
            <Header />
            <div className="flex flex-[0.95]">
              <Sidebar />
              <Body />
            </div>
          </div>
        </div>
      );
    } else {
      return (<Navigate to={`/${StudentUser.result.position.toLowerCase()}/home`} replace={true}/>);
    };
};

export default Password;
