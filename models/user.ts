import mongoose, {Document, model, Schema} from "mongoose";
import {ERank} from "@/models/rank";

export interface IUser extends Document {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    rank: ERank
}

const UserSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {  type: String, required:true },
    rank: {  type: mongoose.Schema.Types.ObjectId, ref: 'Rank', required: true }
});

const UserModel = model<>('User', UserSchema);

export default UserModel;
