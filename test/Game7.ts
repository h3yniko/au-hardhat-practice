import { expect } from "chai";
import hre from "hardhat";

describe("Challenge", () => {
  it("Should solve", async function () {
    const [wallet] = await hre.viem.getWalletClients()
    const challenge = await hre.viem.deployContract("Game7")

    await challenge.write.setX([BigInt(25)])
    await challenge.write.setY([BigInt(25)])
    await challenge.write.win()

    const events = await challenge.getEvents.Winner()
    expect(events[0].args.winner?.toLowerCase()).to.eq(wallet.account.address.toLowerCase())
  });
})
