import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Write from "../pages/Write/Write";
const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default Router;
