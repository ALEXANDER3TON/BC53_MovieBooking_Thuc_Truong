import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "./Routes/path";
import MainLayout from "./Layout/MainLayout";
import HomeModule from "./Module/Home/HomeModule";
import NotFound from "./Module/NotFound";
import Details from './Module/Details'
import BookingPagse from "./Module/BookingPages/BookingPagse";
import Register from "./Module/Auth/Register";
import LogIn from "./Module/Auth/LogIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<MainLayout />}>
          <Route index element={<HomeModule />} />
          <Route path={PATH.MOVIE_DETAILS} element={<Details/>} />
          <Route path={PATH.BOOKING_MOVIE} element={<BookingPagse/>}/>
          <Route path={PATH.REGISTER} element={<Register/>}/>
          <Route path={PATH.LOG_IN} element={<LogIn/>}/>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
