import { NextApiRequest, NextApiResponse } from "next";
import Analyse from "@/models/analyse";
import {getConnection} from "@/lib/dbConnect";
import {Connection} from "mongoose";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse) {
    const { method } = req

    const connection: Connection = getConnection();
    console.log(connection);

    switch (method) {
        case 'GET':
            try {
                const analyses = await Analyse.find({})
                res.status(200).json({ success: true, data: analyses })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}