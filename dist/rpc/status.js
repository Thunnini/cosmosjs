"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var big_integer_1 = __importDefault(require("big-integer"));
var ResultStatus = /** @class */ (function () {
    function ResultStatus(nodeInfo, syncInfo, validatorInfo) {
        this.nodeInfo = nodeInfo;
        this.syncInfo = syncInfo;
        this.validatorInfo = validatorInfo;
    }
    ResultStatus.fromJSON = function (obj) {
        return new ResultStatus(NodeInfo.fromJSON(obj.result.node_info), SyncInfo.fromJSON(obj.result.sync_info), ValidatorInfo.fromJSON(obj.result.validator_info));
    };
    return ResultStatus;
}());
exports.ResultStatus = ResultStatus;
var NodeInfo = /** @class */ (function () {
    function NodeInfo(protocolVersion, id, listenAddr, network, version, channels, moniker, other) {
        this.protocolVersion = protocolVersion;
        this.id = id;
        this.listenAddr = listenAddr;
        this.network = network;
        this.version = version;
        this.channels = channels;
        this.moniker = moniker;
        this.other = other;
    }
    NodeInfo.fromJSON = function (obj) {
        return new NodeInfo({
            p2p: parseInt(obj.protocol_version.p2p, 10),
            block: parseInt(obj.protocol_version.block, 10),
            app: parseInt(obj.protocol_version.app, 10)
        }, obj.id, obj.listen_addr, obj.network, obj.version, obj.channels, obj.moniker, {
            txIndex: obj.other.tx_index === "on" ? true : false,
            rpcAddress: obj.other.rpc_address
        });
    };
    return NodeInfo;
}());
exports.NodeInfo = NodeInfo;
var SyncInfo = /** @class */ (function () {
    function SyncInfo(latestBlockHash, latestAppHash, latestBlockHeight, latestBlockTime, catchingUp) {
        this.latestBlockHash = latestBlockHash;
        this.latestAppHash = latestAppHash;
        this.latestBlockHeight = latestBlockHeight;
        this.latestBlockTime = latestBlockTime;
        this.catchingUp = catchingUp;
    }
    SyncInfo.fromJSON = function (obj) {
        return new SyncInfo(obj.latest_block_hash, obj.latest_app_hash, big_integer_1.default(obj.latest_block_height), new Date(obj.latest_block_time), obj.catching_up);
    };
    return SyncInfo;
}());
exports.SyncInfo = SyncInfo;
var ValidatorInfo = /** @class */ (function () {
    function ValidatorInfo(address, 
    // TODO: Suport validator pubkey when Ed25519 is implemented
    // public readonly pubKey:PubKey,
    votingPower) {
        this.address = address;
        this.votingPower = votingPower;
    }
    ValidatorInfo.fromJSON = function (obj) {
        return new ValidatorInfo(obj.address, obj.voting_power);
    };
    return ValidatorInfo;
}());
exports.ValidatorInfo = ValidatorInfo;
//# sourceMappingURL=status.js.map