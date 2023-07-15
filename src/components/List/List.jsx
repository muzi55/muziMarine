import React from "react";
import "./List.scss";
import { useNavigate } from "react-router-dom";
function List({ data }) {
  console.log(data);
  const { title, images, id, content } = data;
  const navigate = useNavigate();
  return (
    <>
      <li
        onClick={() => {
          navigate("/");
        }}
        className="list">
        <div className="img-box">
          <>
            <img src={images[0]} alt="" />
          </>
        </div>
        <div className="text-box">
          <p>{content}</p>
        </div>
      </li>
    </>
  );
}

export default List;
