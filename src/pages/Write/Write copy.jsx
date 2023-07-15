import React, { useRef, useState } from "react";
import "./Write.scss";
import Header from "../../components/Header/Header";
import { useMutation, useQueryClient } from "react-query";
import { addpost } from "../../api/posts";
function Write() {
  const [inputImgs, setInputImgs] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    pass: "",
    content: "",
  });

  const { title, pass, content } = inputs;
  const onChangeInput = (e) => {
    const { name, value } = e.target;
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
    const newPost = {
      title,
      pass,
      images: inputImgs,
      content,
    };
    mutationAdd.mutate(newPost);
  };

  return (
    <>
      <Header />
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="inputs">
          <input name="title" value={title} onChange={(e) => onChangeInput(e)} type="text" placeholder="제목" />
          <input name="pass" value={pass} onChange={(e) => onChangeInput(e)} type="password" placeholder="****" maxLength="4" />
          <input className="hidden" type="file" multiple ref={inputRef} onChange={onChangeImgInput} />
          <textarea name="content" value={content} onChange={(e) => onChangeInput(e)}></textarea>
          <div className="img-imput" onClick={() => inputRef.current?.click()}>
            +
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
