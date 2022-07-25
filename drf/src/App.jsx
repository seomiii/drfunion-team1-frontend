import React from "react";
import Borad from "./Borad";
import items from "./mockup.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostView from "./PostView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Borad items={items} />} />
        <Route path="/postview/:id" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
