import Link from 'next/link';
import React from 'react';
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
            </ul>
        </div>
    );
}

export default Header;