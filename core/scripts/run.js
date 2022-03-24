const hre = require("hardhat");

async function main() {

  const PatientContract = await hre.ethers.getContractFactory("Patient");
  const patient = await PatientContract.deploy();

  await patient.deployed();

  console.log("Patient deployed to:", patient.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
