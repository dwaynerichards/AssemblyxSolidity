// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ReturnEthxYul {
    constructor() {}

    function acceptEth() external payable returns (address etherSent) {
        assembly {
            etherSent := callvalue()
        }
    }
}
