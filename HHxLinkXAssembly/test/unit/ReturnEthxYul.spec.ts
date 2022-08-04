import { assert, expect } from "chai";
import { deployments, ethers } from "hardhat";

describe("RandomNumberConsumer Unit Tests", async function () {
  let returnEthxYu;

  beforeEach(async () => {
    await deployments.fixture(["ReturnEthxYul"]);
    returnEthxYu = await ethers.getContract("ReturnEthxYul");
  });
  it("Should return corrent amount of eth sent to contract", async () => {});
});
