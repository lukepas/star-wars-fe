import React from "react";
import Router from "./config/Router/Router";
import StoreProvider from "./config/StoreProvider/StoreProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};

export default App;
