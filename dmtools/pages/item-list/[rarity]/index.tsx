import { IItem } from "../../../src/Models/Item";
import Header from "../../../components/Header";
import ItemListView from "../../../components/ItemListView";
import { connectToDatabase } from "../../../util/mongodb";
import { getRarityDisplayText } from "../../../src/Rarity";
import styles from "./styles.module.css";
import SearchView from "../../../components/Search";
import { useState } from "react";
import Link from "next/link";

export default function ItemListByRarity({ items, rarity }: { items: IItem[], rarity: string }) {
    const [query, setQuery] = useState("");
    let displayItems: IItem[] = [];

    if (items) {
        items.sort((x, y) => (x.name > y.name) ? 1 : -1);
        if (query !== "") {
            displayItems = items.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
        }
        else {
            displayItems = items;
        }
    }

    function getRandomItemId() {
        return items[Math.floor(Math.random() * items.length)]._id;
    }

    return (
        <div className={styles.itemlistbyrarity}>
            <Header />
            <div className={styles.itemlist_header}>
                <h3>{getRarityDisplayText(rarity)} Items</h3>
                <SearchView onSearch={setQuery} />
                <Link href={"/item/" + getRandomItemId()}>
                    <button className={styles.itemlist_random}>Get Random</button>
                </Link>
            </div>
            <ItemListView items={displayItems} />
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