import { expect } from "chai";
import hre from "hardhat";

describe("Task1", () => {
  it("Should work", async function () {
    const task1 = await hre.viem.deployContract("Task1");
    const task1Solution = await hre.viem.deployContract("Task1Solution");
    
    await task1Solution.write.solve([task1.address]);

    const winners = await task1.getEvents.Winner()
    expect(winners[0].args[0]?.toUpperCase()).to.eq(task1Solution.address.toUpperCase())
  });
})
