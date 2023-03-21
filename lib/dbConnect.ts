import mongoose, {Connection, ConnectOptions} from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Vous devez définir la variable d'environnement MONGODB_URI dans .env.local");
}

let connection: Connection;

export async function connectToDB(): Promise<void> {

    const options: ConnectOptions = {};

    try {
        await mongoose.connect(MONGODB_URI, options);
        connection = mongoose.connection;
        console.log('Connecté à la base de donnée !');
    } catch (error) {
        console.error(error);
        throw new Error('Impossible de se connecter à la base de donnée.');
    }
}

connectToDB()
    .then(_r => console.log("Connexion à la base de donnée..."))
    .catch(e => console.error(e));

export function getConnection(): Connection {
    if (!connection) {
        throw new Error("Vous devez être connecté à la base de donnée avant de récupérer la connexion getConnection().");
    } else {
        return connection;
    }
}