const hre = require("hardhat");

async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const ProductContractFactory = await hre.ethers.getContractFactory(
    "ProductDetection"
  );
  const productContract = await ProductContractFactory.deploy();

  await productContract.deployed();

  console.log("Contract deployed to:", productContract.address);
  // console.log("Owner is:", owner.address);
  // console.log("Another User is:", randomPerson.address);

  const manCreation = await productContract.createManufacturer(
    "Sonam",
    "https://tekraj.com",
    randomPerson.address
  );
  await manCreation.wait();
  console.log(await productContract.getManufacture(randomPerson.address));
  const productCreation = await productContract.createProduct(
    "Shoe",
    "Nike",
    9000,
    randomPerson.address
  );
  await productCreation.wait();
  console.log(await productContract.getProduct(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
