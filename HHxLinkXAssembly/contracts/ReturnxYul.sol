// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract ReturnxYul {
    constructor() {
        console.log("ReturnEthxYul constructed");
    }

    event EthSent(uint256 etherSent);

    function acceptEth() external payable returns (uint256 ) {
        assembly {
            let etherSent := callvalue()
            mstore(0x40, etherSent)
            return(0x40, 32)
        }
    }
}
