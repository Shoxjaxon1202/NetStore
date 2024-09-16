import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Router from "../../Router/Router";
import TopNav from "../TopNav/TopNav";

const Loyout = ({ handleLogin }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <Navbar handleLogin={handleLogin} count={count} />
      <div className="routes">
        <Router setCount={setCount} />
      </div>
      <Footer />
    </>
  );
};

export default Loyout;
