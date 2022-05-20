import Link from 'next/link';
import React from 'react';
import SearchView from '../Search';
import styles from './styles.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/item-list">
                        <a>Items Lists</a>
                    </Link>
                </li>
                {/* <li>
                    <SearchView />
                </li> */}
            </ul>
        </div>
    );
}

export default Header;