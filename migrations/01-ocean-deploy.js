const OceanNFT = artifacts.require('Ocean');

// Default
module.exports = function(deployer, network, accounts) {
    console.log(network, accounts);
    deployer.deploy(OceanNFT, {from: accounts[1]});
}