"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This BIP defines a logical hierarchy for deterministic wallets.
 */
var BIP44 = /** @class */ (function () {
    function BIP44(purpose, coinType, account) {
        this.purpose = purpose;
        this.coinType = coinType;
        this.account = account;
    }
    /**
     * Return path
     * @param index Addresses are numbered from index 0 in sequentially increasing manner. This number is used as child index in BIP32 derivation.
     * Public derivation is used at this level.
     * @param change Constant 0 is used for external chain and constant 1 for internal chain (also known as change addresses). External chain is used for addresses that are meant to be visible outside of the wallet (e.g. for receiving payments). Internal chain is used for addresses which are not meant to be visible outside of the wallet and is used for return transaction change.
     * Public derivation is used at this level.
     */
    BIP44.prototype.path = function (index, change) {
        if (change === void 0) { change = 0; }
        if (this.purpose !== parseInt(this.purpose.toString(), 10)) {
            throw new Error("Purpose should be integer");
        }
        if (this.coinType !== parseInt(this.coinType.toString(), 10)) {
            throw new Error("CoinType should be integer");
        }
        if (this.account !== parseInt(this.account.toString(), 10)) {
            throw new Error("Account should be integer");
        }
        if (change !== parseInt(change.toString(), 10)) {
            throw new Error("Change should be integer");
        }
        if (index !== parseInt(index.toString(), 10)) {
            throw new Error("Index should be integer");
        }
        return [this.purpose, this.coinType, this.account, change, index];
    };
    BIP44.prototype.pathString = function (index, change) {
        if (change === void 0) { change = 0; }
        var path = this.path(index, change);
        return "m/" + path[0] + "'/" + path[1] + "'/" + path[2] + "'/" + path[3] + "/" + path[4];
    };
    return BIP44;
}());
exports.BIP44 = BIP44;
//# sourceMappingURL=bip44.js.map