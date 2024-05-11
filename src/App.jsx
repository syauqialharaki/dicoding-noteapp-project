import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHeader from "../src/layout/Header";
import LayoutFooter from "./layout/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Archieve from "./pages/Archieve";
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <section className="max-w-7xl mx-auto">
        <LayoutHeader />
        <main className=" flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/archieve" element={<Archieve />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </main>
        <LayoutFooter />
      </section>
    </BrowserRouter>
  );
}

export default App;
