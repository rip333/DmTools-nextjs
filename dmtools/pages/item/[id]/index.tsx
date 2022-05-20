import { IItem } from "../../../src/Models/Item";
import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";
import Header from "../../../components/Header";
import ItemView from "../../../components/ItemView";

export default function Item({ item }: { item: IItem }) {
    return (
        <div>
            <ItemView item={item} />
        </div>
    );
}

export async function getServerSideProps(context: { params: { id: string; }; }) {
    const { db } = await connectToDatabase();
    const data = await db.collection("Items").findOne({ _id: new ObjectId(context.params.id) });
    const item = JSON.parse(JSON.stringify(data));
    return { props: { item } };
}