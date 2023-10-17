import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const challenge = await hre.viem.deployContract("Game2");

    await challenge.write.switchOn([BigInt(20)])
    await challenge.write.switchOn([BigInt(47)])
    await challenge.write.switchOn([BigInt(212)])
    await challenge.write.win()

    await challenge.read.isWon()

    expect(await challenge.read.isWon()).to.be.true
  });
})
