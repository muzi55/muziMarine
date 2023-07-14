import axios from "axios";
// 조회
const getpost = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};
// 추가
const addpost = async (newpost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newpost);
};
// 삭제
const deletepost = async (postId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`);
};
// 수정
const updatepost = async (post) => {
  const { postId, updatepost } = post;
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`, updatepost);
};

export { getpost, addpost, deletepost, updatepost };
