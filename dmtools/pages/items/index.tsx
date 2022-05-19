import { IItem } from "../../src/Models/Item";
import { useEffect, useState } from "react";

export default function Items() {
    const [items, setItems] = useState<IItem[]>([]);
    useEffect(() => {
        const asyncGetItems = async () => {
            const { origin } = window.location;
            const data = await fetch(origin + "/api/items");
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
            <p>
                {item.name}
            </p>
        </div>
    ));

    return (
        <div>
            {mappedItems}
        </div>
    );
}