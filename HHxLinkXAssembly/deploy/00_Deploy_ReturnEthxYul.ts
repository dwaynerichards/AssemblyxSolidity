import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const ReturnEthxYul = await deploy("ReturnxYul", {
    from: deployer,
    log: true,
  });

  log(` =======> ReturnEthxYul Deployed! at ${ReturnEthxYul.address}`);
  log(`----------------------------------------------------`);
  log(func.tags);
};

func.tags = ["returnxyul"];
export default func;
