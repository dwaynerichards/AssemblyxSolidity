import { expect } from "./chai-setup";
import { BigNumber, Contract } from "ethers";
import { deployments, ethers, getNamedAccounts } from "hardhat";

console.log("what is going on");
describe("ReturnEthxYul Unit Tests", async () => {
  const { deployer } = await getNamedAccounts();
  const returnEthxYu: Contract = await ethers.getContract("ReturnEthxYul", deployer);

  console.log("in body");
  it("Should return corrent amount of eth sent to contract", async () => {
    await deployments.fixture(["ReturnEthxYul"]);
    //connect contract t osigner
    const oneWei = { value: ethers.utils.parseUnits("1", "wei") };

    expect(await returnEthxYu.acceptEth(oneWei))
      .to.emit(returnEthxYu, "EthSent")
      .withArgs(BigNumber.from(1));
    //invoke function
    //get return
  });
});

describe("function Invocation", async () => {
  console.log("in body");

  beforeEach(async () => {
    const ReturnEthxYul = await deployments.fixture(["returnxyul"]);
    console.log("contract Deployment:", ReturnEthxYul);
  });
  it("Should return corrent amount of eth sent to contract", async () => {
    const { deployer } = await getNamedAccounts();
    const returnxYul: Contract = await ethers.getContract("ReturnxYul");
    console.log("got contract");
    const oneWei = { value: ethers.utils.parseUnits("1", "wei") };
    expect(await returnxYul.acceptEth(oneWei)).to.emit(returnxYul, "EthSent");
    //invoke function
    //get return
  });
});
