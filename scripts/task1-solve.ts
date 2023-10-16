import hre from "hardhat";

async function main() {
  const task1Solution = await hre.viem.getContractAt("Task1Solution", "0x21944eE656C138177A96021811977A4650cC35F3");
  task1Solution.write.solve(['0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'])
  console.log(`Success`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
