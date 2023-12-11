import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "./Routes/path";
import MainLayout from "./Layout/MainLayout";
import HomeModule from "./Module/Home/HomeModule";
import NotFound from "./Module/NotFound";
import Details from './Module/Details'
import BookingPagse from "./Module/BookingPages/BookingPagse";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<MainLayout />}>
          <Route index element={<HomeModule />} />
          <Route path={PATH.MOVIE_DETAILS} element={<Details/>} />
          <Route path={PATH.BOOKING_MOVIE} element={<BookingPagse/>}/>
         
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
