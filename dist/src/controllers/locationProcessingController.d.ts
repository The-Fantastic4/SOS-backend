import { Request, Response } from "express";
import { location } from "../utils/types";
export declare function getClosestPoliceStationLocation(req: Request, res: Response): Promise<Response<any, Record<string, any>> | {
    station_name: string;
    station_device_token: string | null | undefined;
    liveLocation: location;
}>;
