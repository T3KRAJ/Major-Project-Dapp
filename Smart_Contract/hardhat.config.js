require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/euF7pjZsFaeIi2OTQ-5doS5CEtSxhjgn",
      accounts: [
        "488ff3838d4b0c9379cc4071b57ad1780728d6d01f04e5288fae177e20320c31",
      ],
    },
  },
};

// npx hardhat run scripts/deploy.js --network rinkeby
// 0xB06f44329c3B2f92B1C9C78440Ca76063d575208;
