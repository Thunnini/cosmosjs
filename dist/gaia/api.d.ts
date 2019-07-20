import { Api, ApiConfig, CoreConfig } from "../core/api";
import { GaiaRest } from "./rest";
export declare class GaiaApi extends Api<GaiaRest> {
    constructor(config: ApiConfig, coreConfig?: Partial<CoreConfig<GaiaRest>>);
}
