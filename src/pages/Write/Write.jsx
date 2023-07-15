import React, { useRef, useState } from "react";
import "./Write.scss";
import Header from "../../components/Header/Header";
import { useMutation, useQueryClient } from "react-query";
import { addpost } from "../../api/posts";
import { useNavigate } from "react-router-dom";
function Write() {
  const navigate = useNavigate();
  const [inputImgs, setInputImgs] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    pass: "",
    content: "",
  });

  const { title, pass, content } = inputs;
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const inputRef = useRef(null);
  const queryClient = useQueryClient();

  const onChangeImgInput = (e) => {
    if (e.currentTarget.files?.[0]) {
      const file = e.currentTarget.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = (event) => {
        setInputImgs((prev) => [...prev, event.target?.result]);
      };
    }
  };

  const mutationAdd = useMutation(addpost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  const onClickPostAdd = () => {
    if (title === "" || inputImgs === [] || content === "") return alert("내용이 비어있어 !");
    if (pass === "" && pass.length < 4) return alert("비밀번호를 확인해");

    const newPost = {
      title,
      pass,
      images: inputImgs,
      content,
    };
    console.log(newPost);
    mutationAdd.mutate(newPost);
    alert("게시글 입력완료야 !");
    navigate("/");
  };

  return (
    <>
      <Header />
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="inputs">
          <div className="form-header">
            <label htmlFor="title" className="hidden">
              이름
            </label>
            <input name="title" id="title" value={title} onChange={(e) => onChangeInput(e)} type="text" placeholder="이름" />
            <label htmlFor="password" className="hidden">
              비밀번호
            </label>
            <input name="pass" id="password" value={pass} onChange={(e) => onChangeInput(e)} type="password" placeholder="****" maxLength="4" />
          </div>
          <input className="hidden" type="file" multiple ref={inputRef} onChange={onChangeImgInput} />
          <textarea name="content" value={content} onChange={(e) => onChangeInput(e)}></textarea>
          <div className="img-imput" onClick={() => inputRef.current?.click()}>
            +
          </div>
          {console.log(inputImgs)}
          {/* {inputImgs.map(el=>{<></>})} */}
          <div className="priview-imgbox">
            {inputImgs &&
              inputImgs.map((el) => {
                return (
                  <div className="preview-box">
                    <img className="imgs-preview" src={el} />
                  </div>
                );
              })}
          </div>
        </div>
        <button type="submit" onClick={onClickPostAdd}>
          전송
        </button>
      </form>
    </>
  );
}

export default Write;
