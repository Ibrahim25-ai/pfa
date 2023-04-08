var Farmer = artifacts.require("./Farmer.sol");
var suply = artifacts.require("./Supplychain.sol");
module.exports = function(deployer) {
  deployer.deploy(suply);
};