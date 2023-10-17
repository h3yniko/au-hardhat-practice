import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const [wallet1, wallet2, wallete3] = await hre.viem.getWalletClients()
    const challenge = await hre.viem.deployContract("Game3");

    // TODO

    await challenge.write.buy({ value: BigInt(2), account: wallet1.account })
    await challenge.write.buy({ value: BigInt(3), account: wallet2.account })
    await challenge.write.buy({ value: BigInt(1), account: wallete3.account })

    await challenge.write.win([wallet1.account.address, wallet2.account.address, wallete3.account.address])

    expect(await challenge.read.isWon()).to.be.true
  });
})
