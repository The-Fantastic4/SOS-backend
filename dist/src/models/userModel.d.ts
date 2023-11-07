import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    firstName: string;
    lastName: string;
    phone_number: string;
    device_token?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
