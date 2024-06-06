import { method, prop, SmartContractLib } from 'scrypt-ts'

export class CSTARKVerifier extends SmartContractLib {
    @prop()
    x: bigint

    constructor(x: bigint) {
        super(...arguments)
        this.x = x
    }

    @method()
    verify(): boolean {
        return true
    }
}
