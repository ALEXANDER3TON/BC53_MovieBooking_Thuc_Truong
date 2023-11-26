import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "./Routes/path";
import MainLayout from "./Layout/MainLayout";
import HomeModule from "./Module/Home/HomeModule";
import NotFound from "./Module/NotFound";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes path={PATH.HOME} element={<MainLayout />}>
        <Route index element={<HomeModule/>}/>
        <Route path="movie/movie:ID"/>


        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
