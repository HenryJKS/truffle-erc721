// artifacts is a Truffle global that provides information about the contract artifacts that are available to deploy.
const Ocean = artifacts.require('Ocean');
// truffle-assertions is a helper library for testing Solidity smart contracts with truffle. It allows you to write tests that check for specific events emitted by your contracts. 
const truffleAssert = require('truffle-assertions');
 
contract("Ocean", (accounts) => {
    it("Compare the event name with one in the contract", async() => {
        const ocean = await Ocean.deployed();

        let txResult = await ocean.safeMint(accounts[0], "ocean_1.json");

        // compare the event name with the one in the contract
        assert.equal(txResult.logs[0].event, "Transfer", "NFT was not credited to the address");

    }),

    it("Owner of NFT should be the same as the address that minted it", async() => {
        const ocean = await Ocean.deployed();

        await ocean.safeMint(accounts[0], "ocean_1.json");

        assert.equal(await ocean.ownerOf(0), accounts[0], "Owner of NFT is not the same as the address that minted it");
    })
})

