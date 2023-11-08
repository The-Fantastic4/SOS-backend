import mongoose from "mongoose";
export declare const stationModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    city: string;
    station_Name: string;
    longitude: number;
<<<<<<< HEAD
    lattitude: number;
=======
    latitude: number;
    city: string;
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
    device_token?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
