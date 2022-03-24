const hre = require("hardhat");

const main = async () => {
  const PatientContractFactory = await hre.ethers.getContractFactory("Patient");
  const PatientContract = await PatientContractFactory.deploy();
  await PatientContract.deployed();

  console.log("Contract deployed to:", PatientContract.address);

 

  let patientTxn = await PatientContract.store_patient_details(1, "Vivek", 22, 'Male', "5ft", 58, "Mahendranager", 9845466194, "tekjoshui@gmail.com", 32);
  await patientTxn.wait();

  console.log( await PatientContract.retreive_patient_details(1));

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