import React from "react";
import PageRouter from "./Routing/PageRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <PageRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
