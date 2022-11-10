import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import CreateBoard from "./components/pages/createBoard/CreateBoard";
import MainBoard from "./components/pages/mainBoard/MainBoard";
import ShowBoard from "./components/pages/showBoard/ShowBoard";

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/create" element={<CreateBoard />} />
        <Route path="/test" element={<ShowBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
