const Dex = artifacts.require("Dex")
const Link = artifacts.require("Link")
const truffleAssert = require('truffle-assertions');
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
       
})
