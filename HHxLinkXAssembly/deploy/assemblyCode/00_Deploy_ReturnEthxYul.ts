import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const ReturnEthxYul = await deploy("ReturnEthxYul", {
    from: deployer,
    contract: "ReturnEthxYul",
    log: true,
  });

  log(`ReturnEthxYul Deployed! at ${ReturnEthxYul.address}`);
  log(`----------------------------------------------------`);
  log(`You are deploying to a local network, you'll need a local network running to interact`);
  log("Please run `yarn hardhat console` to interact with the deployed smart contracts!");
};

export default func;
func.tags = ["ReturnEthxYul"];
