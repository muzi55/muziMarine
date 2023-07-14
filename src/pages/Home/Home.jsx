import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import img from "./../../img/logo.svg";
function Home() {
  return (
    <>
      <Header />
      <Button size="large" className="writeBtn">
        힘 보내기
      </Button>
      <div>
        <ul className="list-box">
          <li className="list">
            <div className="img-box">
              <img src={img} alt="#" />
            </div>
            <div className="text-box">
              <p>텍스트 입니다.</p>
            </div>
          </li>
          <li className="list">
            <div className="img-box">
              <img src="#" alt="#" />
            </div>
            <div className="text-box">
              <p>텍스트 입니다.</p>
            </div>
          </li>
          <li className="list">
            <div className="img-box">
              <img src="#" alt="#" />
            </div>
            <div className="text-box">
              <p>텍스트 입니다.</p>
            </div>
          </li>
          <li className="list">
            <div className="img-box">
              <img src="#" alt="#" />
            </div>
            <div className="text-box">
              <p>텍스트 입니다.</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
