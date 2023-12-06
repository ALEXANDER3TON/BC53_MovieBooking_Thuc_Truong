import React from "react";
import Banner from "./Banner/Banner";

import Showing from "./Showing/Showing";
import QuickBooking from "./QuickBooking";

const HomeModule = () => {
  return (
    <div>
      <Banner />
      <QuickBooking/>
      <Showing />
    </div>
  );
};

export default HomeModule;
