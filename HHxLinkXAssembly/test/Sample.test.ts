import { expect } from "./chai-setup";
import { BigNumber, Contract } from "ethers";
import { deployments, ethers, getNamedAccounts } from "hardhat";

describe("Sample", async () => {
  let Sample: Contract;
  beforeEach(async () => {
    const deployment = await deployments.fixture(["sample"]);
    Sample = await ethers.getContract("Sample");
  });
  it("Should Deploy Function", async () => {
    console.log("sample address:", Sample.address);
    expect(Sample.address).to.not.equal(undefined);
  });
});
