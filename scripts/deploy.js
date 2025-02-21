const hre = require("hardhat");

async function main() {
  console.log("🔹 Deploying FraudDetection contract...");

  const FraudDetection = await hre.ethers.getContractFactory("FraudDetection");
  console.log("🔹 Contract Factory Loaded...");

  const fraudContract = await FraudDetection.deploy();
  console.log("🔹 Contract is deploying...");

  await fraudContract.waitForDeployment(); // Fixed deployment method

  console.log("✅ Contract deployed at:", fraudContract.target);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
