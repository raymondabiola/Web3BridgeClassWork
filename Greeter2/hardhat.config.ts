import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: "../.env" });

const {PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.30",

  networks: {
    celoTestnet: {
      url: "https://rpc.ankr.com/celo_sepolia",
      chainId: 11142220,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};

export default config;
