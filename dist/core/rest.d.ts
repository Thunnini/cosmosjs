import { Context } from "./context";
import { AxiosInstance } from "axios";
export declare class Rest {
    private _context;
    private _instance;
    constructor(_context: Context);
    readonly context: Context;
    readonly instance: AxiosInstance;
}
