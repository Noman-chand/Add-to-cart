import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./ProjectOfApi/NavBar";
import CreateForm from "./ProjectOfApi/CreateForm";
import TableRead from "./ProjectOfApi/TableRead";
import ViewPart from "./ProjectOfApi/ViewPart";
import Edit from "./ProjectOfApi/Edit";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CreateForm />} />
        <Route path="/read" element={<TableRead />} />
        <Route path="/view" element ={<ViewPart />} />
        <Route path="/edit/:id" element={<Edit />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
