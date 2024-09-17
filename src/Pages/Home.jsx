import React from "react";
import Intro from "../UI/Intro/Intro";
import Katalog from "../UI/Katalogs/Katalog";
import "./home.scss";
import Chegirmalar from "../UI/Chegirmalar/Chegirmalar";
import NewProduct from "../UI/NewPoduct/NewProduct";
import AllProduct from "../UI/AllProduct/AllProduct";
import End from "../UI/End/End";
const Home = ({ base, addGood }) => {
  return (
    <div>
      <Intro />
      <Katalog />
      <Chegirmalar addGood={addGood} base={base} />
      <NewProduct />
      <AllProduct addGood={addGood} base={base} />
      <End />
    </div>
  );
};

export default Home;
