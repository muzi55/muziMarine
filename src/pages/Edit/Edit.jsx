import React, { useCallback, useRef, useState } from "react";
import "./Edit.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useMutation, useQueryClient } from "react-query";
import { updatepost } from "../../api/posts";
function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputImgs, setInputImgs] = useState(location.state.images);
  const [inputs, setInputs] = useState({
    title: location.state.title,
    pass: location.state.pass,
    content: location.state.content,
    images: location.state.images,
  });
  const { title, pass, content } = inputs;

  const onChangeInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const onChangeImgInput = useCallback((e) => {
    if (e.currentTarget.files?.[0]) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event) => {
        setInputImgs((prev) => [...prev, event.target?.result]);
      };
    }
  }, []);

  const inputRef = useRef(null);
  const queryClient = useQueryClient();
  //   수정하기
  const mutationUpdatePost = useMutation(updatepost);
  const onClickEditBtn = () => {
    const updatePost = {
      title,
      pass: 1234,
      inputImgs,
      content,
      id: location.state.id,
    };
    // console.log(updatePost);
    mutationUpdatePost.mutate(updatePost);
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

          <div className="priview-imgbox">
            {inputImgs &&
              inputImgs.map((el, index) => {
                return (
                  <div key={el + index} className="preview-box">
                    <img className="imgs-preview" src={el} alt="리스트아이템 사진입니다." />
                  </div>
                );
              })}
          </div>
        </div>
        <button type="submit" onClick={onClickEditBtn}>
          전송
        </button>
      </form>
    </>
  );
}

export default Edit;
