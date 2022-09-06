const Dex = artifacts.require("Dex")
const Link = artifacts.require("Link")
const truffleAssert = requrie('truffle-assertions');
contract ("Dex", accounts => {
    it("should only be possible for owner to add tokens", async () => {
        let dex = await Dex.deployed()
        let link = await Link.deployed()
        await truffleAssert.passes(
            dex.addToken(web3.utils.fromUtf8("LINK"), link.address, {from: accounts[0]})
        )
        await truffleAssert.reverts(
            dex.addToken(web3.utils.fromUtf8("LINK"), link.address, {from: accounts[1]})
        )
    })
    it("should handle deposits correctly", async () => {
        let dex = await Dex.deployed()
        let link = await Link.deployed()
        await link.approve(dex.address, 500);
        await dex.deposit(100, web3.utils.fromUtf8("LINK"));
        let balance = await (100, web3.utils.fromUtf8("LINK"))
        assert.equal( balance.toNumber(), 100 )
        //await truffleAssert.passes(
            //dex.addToken(web3.utils.fromUtf8("LINK"), link.address, {from: accounts[0]})
        //)
    })    
})