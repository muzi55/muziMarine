import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import img from "./../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getpost } from "../../api/posts";
function Home() {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getpost);
  if (isLoading) return "dasd";
  if (isError) return "dasd";
  // console.log(data[0].images[0]);

  return (
    <>
      <Header />
      <Button onClick={() => navigate("/write")} size="large" className="writeBtn">
        힘 보내기
      </Button>
      <img src={data[0]?.images[0]} alt="" />
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
        </ul>
      </div>
    </>
  );
}

export default Home;
