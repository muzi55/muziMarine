import axios from "axios";

const getpost = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

const addpost = async (newpost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newpost);
};

const deletepost = async (postId) => {
  console.log(postId);
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`);
};

const updatepost = async (post) => {
  console.log(post);
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${post.id}`, post);
};

export { getpost, addpost, deletepost, updatepost };
