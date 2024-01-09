import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = () => {
  // set your conditional Route or Private Routes
  return (
    <BrowserRouter>
      {/* declare static Components here  Like Header Navbar etc */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Error />} />
      </Routes>
      {/* declare static Components here  Like Footer or Dropdown */}
    </BrowserRouter>
  );
};

export default Index;
