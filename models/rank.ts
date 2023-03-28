import {model, Schema} from 'mongoose';

export enum ERank {
    default = 0,
    administrator = 100
}

const RankSchema: Schema = new Schema({
    name: { type: String, required: true, enum: ['default', 'administrator'] },
    value: { type: Number, required: true, enum: [0, 100] }
});

const RankModel = model<>('Rank', RankSchema);

export default RankModel;