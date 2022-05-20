import React, { FunctionComponent } from 'react';
import { IItem } from '../../src/Models/Item';
import styles from "./styles.module.css";

type Props = {
    item: IItem
}

const ItemView: FunctionComponent<Props> = ({ item }) => {
    return (
        <div className={styles.itemview}>
            <h1 className={styles.itemview_name}>{item.name}</h1>
            <p><i>{item.type} - {item.rarity}</i></p>
            <p><i>{item.attunement}</i></p>
            <p className={styles.itemview__description}>{item.item_text}</p>
            <br/>
            <p><i>Source: {item.source}</i></p>
        </div>
    );
}

export default ItemView;