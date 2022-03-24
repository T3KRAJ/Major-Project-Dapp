const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const patientContractFactory = await hre.ethers.getContractFactory("Patient");
    const patientContract = await patientContractFactory.deploy();
    await patientContract.deployed();
  
    console.log("PatientContract address: ", patientContract.address);
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

  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
  // 0x3493d33058499Ed9250bB3b4E8C7053269d21487