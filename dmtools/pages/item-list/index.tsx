import Link from "next/link";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function ItemList() {
    return (
        <div className={styles.itemlists}>
            <Header />
            <ul>
                <li>
                    <Link href="/item-list/Common">
                        <a className={styles.itemlists__link}>Common</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list/Rare">
                        <a className={styles.itemlists__link}>Rare</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list/Uncommon">
                        <a className={styles.itemlists__link}>Uncommon</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list/VeryRare">
                        <a className={styles.itemlists__link}>Very Rare</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list/Legendary">
                        <a className={styles.itemlists__link}>Legendary</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list/Artifact">
                        <a className={styles.itemlists__link}>Artifact</a>
                    </Link>
                </li>
            </ul>

        </div>
    );
}