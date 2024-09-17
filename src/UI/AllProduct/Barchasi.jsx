import React, { useState, useEffect } from "react";
import "./allProduct.scss";
import AllProductCard from "./AllProductCard";
import BarchasiCard from "./BarchasiCard";

const Barchasi = ({ base, addGood }) => {
  const [newBase, setNewBase] = useState([]);
  const [redIcons, setRedIcons] = useState({});

  useEffect(() => {
    if (base?.length > 0) {
      setNewBase(base.slice(0, 8));
    }
  }, [base]);

  const changeAllButton = () => {
    setNewBase(base?.slice(0, 20));
  };

  const toggleIconColor = (id) => {
    setRedIcons((prevRedIcons) => ({
      ...prevRedIcons,
      [id]: !prevRedIcons[id],
    }));
  };

  return (
    <div id="all" className="allProduct">
      <h1 className="allProduct_title">Barcha mahsulotlarimiz</h1>
      <div className="allProduct_wrapper">
        {base?.map((elem) => (
          <BarchasiCard
            addGood={addGood}
            key={elem?.id}
            {...elem}
            isIconRed={!!redIcons[elem?.id]}
            toggleIconColor={() => toggleIconColor(elem?.id)}
          />
        ))}
      </div>
      {/* <div className="all_card">
        <button onClick={changeAllButton} className="all">
          Barchasini ko'rish
        </button>
      </div> */}
    </div>
  );
};

export default Barchasi;
