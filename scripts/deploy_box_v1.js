const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [7]);
  await box.deployed();

  console.log("Box deployed to: ", box.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
