import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const challenge = await hre.viem.deployContract("Game1");

    await challenge.write.unlock()
    await challenge.write.win()

    await challenge.read.isWon()

    expect(await challenge.read.isWon()).to.be.true
  });
})
