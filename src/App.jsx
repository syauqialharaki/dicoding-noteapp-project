import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHeader from "../src/layout/Header";
import LayoutFooter from "./layout/Footer";
import Home from "./pages/Home";
import Archieve from "./pages/Archieve";
import Add from "./pages/Add";
import DetailWrapper from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <section className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <LayoutHeader />
        <main className="flex-1 flex justify-center items-center">
          <div className="m-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<DetailWrapper />} />
              <Route path="/archieve" element={<Archieve />} />
              <Route path="/new" element={<Add />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <LayoutFooter />
      </section>
    </BrowserRouter>
  );
}

export default App;
