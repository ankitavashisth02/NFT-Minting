// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
  const mytoken = await hre.ethers.deployContract("MyToken", ["https://coral-genetic-sparrow-90.mypinata.cloud/ipfs/QmehY4rPC4dc7WuFMTxnUbNHCTGZNax3w18NX3HAJsemrx", 1000]);

  await mytoken.waitForDeployment();

  console.log("Contract deployed at address: ", await mytoken.getAddress());

  // const MyToken = await hre.ethers.getContractFactory("ERC1155");
  // const mytoken = await MyToken.deploy();
  // console.log("contract address" ,await mytoken.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});