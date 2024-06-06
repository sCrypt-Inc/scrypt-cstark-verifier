import { method, assert, SmartContract } from 'scrypt-ts'

import { CSTARKVerifier } from './cstarkVerifier'

// Test via smart contract:
export class TestCSTARKVerifier extends SmartContract {
    @method()
    public verify1() {
        const verifier = new CSTARKVerifier(0n)
        assert(verifier.verify())
    }
}
