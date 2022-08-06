import chai from "chai";
import { chaiEthers } from "chai-ethers";
import { solidity } from "ethereum-waffle";
chai.use(chaiEthers);
chai.use(solidity);
export = chai;
