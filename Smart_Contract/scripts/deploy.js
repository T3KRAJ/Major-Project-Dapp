const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const productDetectionContractFactory = await hre.ethers.getContractFactory(
    "ProductDetection"
  );
  const productDetectionContract =
    await productDetectionContractFactory.deploy();
  await productDetectionContract.deployed();

  console.log("Product Detection address: ", productDetectionContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
