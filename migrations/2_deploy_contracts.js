// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");

module.exports = function(deployer) {
    // deployer.deploy(ConvertLib);
    // deployer.link(ConvertLib, MetaCoin);
    // deployer.deploy(MetaCoin);

    deployer.deploy(ProofOfExistence1);
};

//var poe;ProofOfExistence1.deployed().then(function(instance){poe = instance;console.log(instance);});