import mongoose, {Connection, ConnectOptions} from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

let connection: Connection;

function connectToDB(): void {

    if (!MONGODB_URI) {
        throw new Error("Vous devez définir la variable d'environnement MONGODB_URI dans .env.local");
    }

    const options: ConnectOptions = {};

    mongoose.connect(MONGODB_URI, options)
        .then(value => connection = value.connection)
        .catch(error => console.error(error))
}

connectToDB();

export default function getConnection(): Connection {
    if (!connection) {
        throw new Error("Vous devez être connecté à la base de donnée avant de récupérer la connexion getConnection().");
    } else {
        return connection;
    }
}