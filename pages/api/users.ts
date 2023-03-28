import {NextApiRequest, NextApiResponse} from "next";
import connectMongo from "@/lib/dbConnect";
import {connection} from "mongoose";
import {WithId} from "mongodb";
import {IUser} from "@/models/user";

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse) {

    const { method } = req;

    await connectMongo();

    switch (method) {
        case "GET":
            const promise: Promise<WithId<IUser>[]> = connection
                .useDb("azoya")
                .collection("users")
                .find()
                .toArray();

            const users = await promise;

            res.status(200).json({body: users})
            break
        case "PUT":
            const { body } = req;

            // Todo: Check entries to avoid problems. And check for duplication.

            connection
                .useDb("azoya")
                .collection("users").
                insertOne(body)
                .then(value => res.status(201).json(value))
                .catch(error => res.status(500).json(error));
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}