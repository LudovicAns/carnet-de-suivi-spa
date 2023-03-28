import { Document, model, Schema } from "mongoose";
import {number} from "prop-types";

export interface IAnalyse extends Document {
    equipement: string;
    ph: number;
    transparence: string;
    temperatureEau: number;
    dpd1: number;
    dpd3: number;
    combine: number;
    libreActif: number;
    createdAt: Date;
    updatedAt?: Date;
}

const AnalyseSchema: Schema = new Schema({
    equipement: { type: String, required: true },
    ph: { type: Number, required: true },
    transparence: { type: String, required: true },
    temperatureEau: { type: Number, required: true },
    dpd1: { type: Number, required: true },
    dpd3: { type: Number, required: true},
    combine: { type: Number, required: true },
    libreActif: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: false }
});

const AnalyseModel = model<IAnalyse>('Analyse', AnalyseSchema);

export default AnalyseModel;