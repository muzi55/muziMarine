import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Write from "../pages/Write/Write";
import Detail from "../pages/Detail/Detail";
import Edit from "../pages/Edit/Edit";
const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default Router;
