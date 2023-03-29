var Farmer = artifacts.require("./Farmer.sol");

module.exports = function(deployer) {
  deployer.deploy(Farmer);
};