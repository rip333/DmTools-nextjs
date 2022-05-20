import { IItem } from "../../../src/Models/Item";
import Header from "../../../components/Header";
import ItemListView from "../../../components/ItemListView";
import { connectToDatabase } from "../../../util/mongodb";
import { getRarityDisplayText } from "../../../src/Rarity";
import styles from "./styles.module.css";

export default function ItemListByRarity({ items, rarity }: { items: IItem[], rarity: string }) {
    if (items) {
        items.sort((x, y) => (x.name > y.name) ? 1 : -1);
    }
    return (
        <div className={styles.itemlistbyrarity}>
            <Header />
            <h3>{getRarityDisplayText(rarity)} Items</h3>
            <ItemListView items={items} />
        </div>
    );
}

export async function getServerSideProps(context: { params: { rarity: string; }; }) {
    const { db } = await connectToDatabase();
    const rarity = context.params.rarity;
    const data = await db.collection("Items").find({ rarity: rarity }).toArray();
    const items = JSON.parse(JSON.stringify(data));
    return { props: { items: items, rarity: rarity } };
}