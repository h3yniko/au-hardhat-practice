// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Task1Solution {
  function solve(address task1) external {
    (bool a, ) = task1.call(abi.encodeWithSignature("attempt()"));
    require(a);
  }
}
