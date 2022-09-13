import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import RcompPage2 from "./components/RcompPage2";
import Home from "./components/Home";
import Page3 from "./common3/Page3";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/page2" element={<RcompPage2 />}></Route>
        <Route path="/page3" element={<Page3 />} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
