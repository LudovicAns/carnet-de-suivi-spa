import { Document, model, Schema } from "mongoose";

export interface IAnalyse extends Document {
    equipement: string;
    ph: number;
    createdAt: Date;
    updatedAt?: Date;
}

const AnalyseSchema: Schema = new Schema({
    equipement: { type: String, required: true },
    ph: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: false }
});

const AnalyseModel = model<IAnalyse>('Analyse', AnalyseSchema);

export default AnalyseModel;