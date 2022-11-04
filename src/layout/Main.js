import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="fixed-width">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
