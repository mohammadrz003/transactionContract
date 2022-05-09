// https://eth-ropsten.alchemyapi.io/v2/nYSoZr4H07-TNdqLJLaf5_pRanHKobNi

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/nYSoZr4H07-TNdqLJLaf5_pRanHKobNi",
      accounts: [
        "fb8b6b1d4bd066c956aa55f2626df41813865201b86f24e8b276a6bf38d1e34f",
      ],
    },
  },
};
