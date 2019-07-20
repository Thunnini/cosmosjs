export interface Bech32Config {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
}
export declare function defaultBech32Config(mainPrefix: string, validatorPrefix?: string, consensusPrefix?: string, publicPrefix?: string, operatorPrefix?: string): Bech32Config;
