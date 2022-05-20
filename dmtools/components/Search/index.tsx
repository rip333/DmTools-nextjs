import styles from './styles.module.css';
import React, { FunctionComponent, useState } from 'react';

type Props = {
    onSearch: (query: string) => void
}

const SearchView: FunctionComponent<Props> = ({onSearch}) => {

    function handleChange(e: { target: { value: string; }; }) {
        onSearch(e.target.value);
    }

    return (
        <div className={styles.searchview}>
            <div className={styles.searchview__search}>
                <input type="text" onChange={handleChange} className={styles.searchview__searchTerm} placeholder="Filter..." />
            </div>
        </div>
    );
}

export default SearchView;