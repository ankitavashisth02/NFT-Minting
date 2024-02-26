import React, { useEffect, useState } from "react";
import nftImg from "./assets/NFT-Img.jpg";

const Body = ({ state }) => {

  return (
    <div className="center-container">
      <img src={nftImg} />
      <button>
        Mint NFT
      </button>
    </div>
  );
};

export default Body;
