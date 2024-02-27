import React, { useEffect, useState } from "react";
import nftImg from "./assets/NFT-Img.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = ({ state }) => {
  const { signer,contract } = state;
  const[mintLoad, setMintLoad] = useState(true);
  const[burnLoad, setBurnLoad] = useState(true);
  const[showBurn, setShowBurn] = useState(false);

  const onBurning = async () => {
    setBurnLoad(false);
    const burned = await contract.burnToken(0,1);
    await burned.wait();

    toast("nft Burned !!");
    console.log("Burned");

    setBurnLoad(true);
    setShowBurn(false);
  };

  async function mintNFT() {
    try {
      event.preventDefault();
      console.log("minting start");
      setMintLoad(false);

      const amt = await contract.currentPrice();
      console.log(Number(amt));
      const options = { value: Number(amt) };
      
      const txn = await contract.mint(await signer.getAddress(), 0,1, options);
      toast("Transaction is processing..")
      await txn.wait();
      
      console.log("Minted NFT!");
      toast("Minted Successfully!!");
      setMintLoad(true);
      setBurnLoad(true);
      setShowBurn(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="center-container">
      <img src={nftImg} />

      <button onClick={mintNFT}>
        {mintLoad ? "Mint" : "Minting.."}
      </button>

      {showBurn && (<button onClick={onBurning}>
        {burnLoad ? "Burn" : "Burning.."}
      </button>)}

      <ToastContainer />
    </div>
  );
};

export default Body;