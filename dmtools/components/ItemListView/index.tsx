import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IItem } from '../../src/Models/Item';
import styles from './styles.module.css';

type Props = {
    items: IItem[]
}

const ItemListView: FunctionComponent<Props> = ({ items }) => {
    const mappedItems = items.reverse().map((item, i) => (
        <div className={styles.itemlist_item}>
            <Link href={"/item/" + item._id}>
                <a>{item.name}</a>
            </Link>

        </div>
    ));

    return (
        <div className={styles.itemlist}>
            {mappedItems}
        </div>
    );
}

export default ItemListView;