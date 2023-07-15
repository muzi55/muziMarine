import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import img from "./../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getpost } from "../../api/posts";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
function Home() {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getpost);
  if (isLoading) return <Loading />;
  if (isError) return <Loading />;

  return (
    <>
      <Header />
      <Button onClick={() => navigate("/write")} size="large" className="writeBtn">
        힘 보내기
      </Button>

      <div className="list-section">
        <ul className="list-box">{data ? data.map((el) => <List key={el.id} data={el} />) : null}</ul>
      </div>
    </>
  );
}

export default Home;
