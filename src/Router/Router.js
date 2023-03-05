import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../components/Form";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
