require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
    hardhat: {},
    sepolia: {
      url: process.env.RPC_ENDPOINT,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
