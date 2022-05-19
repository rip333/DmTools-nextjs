import { NextApiRequest, NextApiResponse } from "next";
import {connectToDatabase } from "../../util/mongodb";

export default async function getItems(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();
    const items = await db.collection("Items").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(items));
};