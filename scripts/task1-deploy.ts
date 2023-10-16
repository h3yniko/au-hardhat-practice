import hre from "hardhat";

async function main() {
  const task1Solution = await hre.viem.deployContract("Task1Solution", [], {} as any);
  console.log(`Deployed to ${task1Solution.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
