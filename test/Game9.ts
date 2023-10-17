import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const [wallet] = await hre.viem.getWalletClients()
    const challenge = await hre.viem.deployContract("Game9")

    await challenge.write.win([56])

    const events = await challenge.getEvents.Winner()
    expect(events[0].args.winner?.toLowerCase()).to.eq(wallet.account.address.toLowerCase())
  });
})
