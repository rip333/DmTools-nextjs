import { IItem } from "../../src/Models/Item";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemList() {
    const [items, setItems] = useState<IItem[]>([]);
    useEffect(() => {
        const asyncGetItems = async () => {
            const { origin } = window.location;
            const data = await fetch(origin + "/api/item-list");
            const items = await data.json();
            return items;
        };
        if (window) {
            asyncGetItems()
                .then((items) => {
                    setItems(items);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const mappedItems = items.reverse().map((item, i) => (
        <div>
            <Link href={"/item/" + item._id}>
                <a>{item.name}</a>
            </Link>

        </div>
    ));

    return (
        <div>
            {mappedItems}
        </div>
    );
}