import { IItem } from "../../../src/Models/Item";
import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default function Item({ item }: { item: IItem }) {

    return (
        <div>
           Name:  {item.name}
        </div>
    );
}

export async function getServerSideProps(context: { params: { id: string; }; }) {
    const { db } = await connectToDatabase();
    const data = await db.collection("Items").findOne({ _id: new ObjectId(context.params.id) });
    const item = JSON.parse(JSON.stringify(data));
    return { props: { item } };
}