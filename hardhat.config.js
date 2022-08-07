require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2b789277aa9b46b68baca4d19ce4bf34", //Infura url with projectID(of rinkeby)
      accounts: ["717332aa7974164f4f9e00ca915d58e9982f512dc88bf5dcca3e821270380a41"] //add the account that will deploy the contract
    },
  }
};
