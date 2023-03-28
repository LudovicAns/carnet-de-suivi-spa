import { NextApiRequest, NextApiResponse } from "next";
import getConnection from "@/lib/dbConnect";
import {AnyObject, Connection} from "mongoose";
import {WithId} from "mongodb";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse) {

    // todo: faire la connexion au lancement du serveur, pose des soucis lors de la récupération des données par le front.
    const { method } = req;
    let connection: Connection;

    try {
        connection = getConnection();
    } catch (error) {
        res.status(500).json({});
        return;
    }

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
        case 'POST':
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
            res.status(400).json({});
            break
    }
}