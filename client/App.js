import React from "react";
import Body from './Body.js';
import ReactDOM from "react-dom/client";
import abi from "./assets/ERC1155.json";
import {Contract, BrowserProvider} from "ethers";
import { useState, useEffect } from "react";

const App = () => {
  const [account, setAccount] = useState(null);
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xe4fdd264a231cDd78F13e02083a7e6b405e9F785";
      const contractAddressAbi = abi.abi;

      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new Contract(
            contractAddress,
            contractAddressAbi,
            signer
          );

          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("metamask not installed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  
  return (
    <React.Fragment>
      <h3>Connected Account : {account} </h3>
      <Body state={state} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


//0x07a978fb4B7168f2cA2FdEdb767a1AEC6652533d