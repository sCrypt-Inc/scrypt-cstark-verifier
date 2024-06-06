import { expect, use } from 'chai'
import { CSTARKVerifier } from '../src/contracts/cstarkVerifier'
import { TestCSTARKVerifier } from '../src/contracts/testCstarkVerifier'
import chaiAsPromised from 'chai-as-promised'
use(chaiAsPromised)

// Test library directly:
describe('Test SmartContractLib `CSTARKVerifier`', () => {
    it('method call', () => {
        const verifier = new CSTARKVerifier(0n)
        expect(verifier.verify()).to.be.true
    })
})

// Test library from a smart contract.
describe('Test SmartContractLib `Lib`', () => {
    before(async () => {
        await TestCSTARKVerifier.loadArtifact()
    })

    it('should pass integration test successfully.', async () => {})
})
