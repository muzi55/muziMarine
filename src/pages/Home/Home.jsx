import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import img from "./../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getpost } from "../../api/posts";
import List from "../../components/List/List";
function Home() {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getpost);
  if (isLoading) return "dasd";
  if (isError) return "dasd";
  // console.log(data[0].images[0]);
  // console.log(data);

  return (
    <>
      <Header />
      <Button onClick={() => navigate("/write")} size="large" className="writeBtn">
        힘 보내기
      </Button>

      <div className="list-section">
        <ul className="list-box">
          {data.map((el) => (
            <List key={el.id} data={el} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
