import { NextApiRequest, NextApiResponse } from "next";
import {AnyObject, connection} from "mongoose";
import {WithId} from "mongodb";
import connectMongo from "@/lib/dbConnect";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse) {

    const { method } = req;

    await connectMongo();

    switch (method) {
        case 'GET':
            let promise: Promise<WithId<AnyObject>[]> = connection
                .useDb("azoya")
                .collection("analyses")
                .find()
                .toArray();

            let analyses = await promise;

            res.status(200).json({body : analyses});
            break
        case 'PUT':
            let { body } = req;
            body = {
                ...body,
                createdAt: Date.now()
            }

            connection
                .useDb("azoya")
                .collection("analyses")
                .insertOne(body)
                .then(value => res.status(201).json(value))
                .catch(error => res.status(500).json(error))
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}