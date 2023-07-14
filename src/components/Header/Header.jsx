import React from "react";
import "./Header.scss";
import img from "./../../img/logo.svg";
function Header() {
  return (
    <>
      <header>
        <img className="logo" src={img} alt="고래모양 로고" />
        <h1 className="hidden">무지 마린</h1>
        <p>
          불쌍하고 말 못하는 해양생물에게
          <br /> 힘을 보내주세요
        </p>
      </header>
    </>
  );
}

export default Header;
