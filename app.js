/**
 * http://truffleframework.com/docs/advanced/build_processes
 */

var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");
var test = artifacts.require("./test.sol");
var utils = require('./utils')(web3);
var rs = require('fs');

module.exports = function() {

    var all = Promise.all([ProofOfExistence1.deployed(), test.deployed()]);

    all.then(function(arr) {
        console.log(arr.length + ' contract(s)');

        return { ProofOfExistence1: arr[0], test: arr[1] };
    }).then(function(contracts) {

        console.log(contracts.ProofOfExistence1.address);
        console.log(contracts.test.address);

        utils.checkAllBalances();
    });
};