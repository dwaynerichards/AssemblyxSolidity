import { DeployFunction } from "hardhat-deploy/types";
//take in hre, return deployments nested on hre and deployer nested on deployments

const deployFunc: DeployFunction = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  await deploy("Sample", {
    from: deployer,
    log: true,
  });
  deployFunc.tags = ["sample"];
};

export default deployFunc;
