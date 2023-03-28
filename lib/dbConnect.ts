import mongoose, {ConnectOptions, Mongoose} from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Vous devez définir la variable d'environnement MONGODB_URI dans .env.local");
}

const options: ConnectOptions = {};

const connectMongo = async (): Promise<Mongoose> => {
    return mongoose.connect(MONGODB_URI, options);
}

export default connectMongo;