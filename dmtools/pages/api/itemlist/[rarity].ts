import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function getItemsByRarity(req: NextApiRequest, res: NextApiResponse) {
    const { rarity } = req.query;
    const { db } = await connectToDatabase();
    const items = await db.collection("Items").find({ rarity: rarity }).toArray();
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(items));
};