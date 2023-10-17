import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const [wallet1, wallet2] = await hre.viem.getWalletClients()
    const challenge = await hre.viem.deployContract("Game4");

    await challenge.write.write([wallet2.account.address], { account: wallet1.account })
    await challenge.write.win([wallet1.account.address], { account: wallet2.account })

    expect(await challenge.read.isWon()).to.be.true
  });
})
