"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defaultBech32Config(mainPrefix, validatorPrefix, consensusPrefix, publicPrefix, operatorPrefix) {
    if (validatorPrefix === void 0) { validatorPrefix = "val"; }
    if (consensusPrefix === void 0) { consensusPrefix = "cons"; }
    if (publicPrefix === void 0) { publicPrefix = "pub"; }
    if (operatorPrefix === void 0) { operatorPrefix = "oper"; }
    return {
        bech32PrefixAccAddr: mainPrefix,
        bech32PrefixAccPub: mainPrefix + publicPrefix,
        bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
        bech32PrefixValPub: mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
        bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
        bech32PrefixConsPub: mainPrefix + validatorPrefix + consensusPrefix + publicPrefix
    };
}
exports.defaultBech32Config = defaultBech32Config;
//# sourceMappingURL=bech32Config.js.map