import React from "react";
import "./Detail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useMutation } from "react-query";
import { deletepost } from "../../api/posts";
function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { images, pass, content, id, title } = location.state;

  const mutationDelete = useMutation(deletepost);
  const onClickEditBtn = () => {
    const check = window.prompt("비밀번호를 써라");
    +check == +pass && navigate("/edit", { state: location.state });
  };

  const onClickDelBtn = () => {
    const check = window.prompt("비밀번호를 여기에다써");
    if (+check === +pass) {
      mutationDelete.mutate(id);
      navigate("/");
    } else {
      alert("비밀번호 가 틀렸어 !");
    }
  };

  return (
    <>
      <Header size="small" />
      <section className="container">
        <h2 className="hidden">디테일 페이지</h2>
        <p className="writer">
          <span>{title}</span> 의 힘보내기
        </p>
        <ul className="img-listbox">
          {images &&
            images.map((el, index) => {
              return <li key={el + index}>{el ? <img src={el} alt="사진" /> : null}</li>;
            })}
        </ul>

        <p className="content">{content}</p>

        <div className="edit-menu">
          <button onClick={onClickEditBtn}>수정</button>
          <button onClick={onClickDelBtn}>삭제</button>
        </div>
        <div className="close-btn">
          <button onClick={() => navigate("/")}>다른글 보기</button>
        </div>
      </section>
    </>
  );
}

export default Detail;
