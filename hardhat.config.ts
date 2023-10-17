import dotenv from 'dotenv'
dotenv.config({
  path: '.env.local'
})

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [
        process.env.PRIVATE_KEY ?? ''
      ]
    }
  }
};

export default config;
