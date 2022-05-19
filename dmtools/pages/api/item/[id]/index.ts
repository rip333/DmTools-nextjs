import { NextApiRequest, NextApiResponse } from "next";
import {connectToDatabase } from "../../../../util/mongodb";

export default async function getItems(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();
    const item = await db.collection("Items").findOne({id: req.query.id});
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(item));
};