import styles from './styles.module.css';
import React, { FunctionComponent, useState } from 'react';

type Props = {

}

const SearchView: FunctionComponent<Props> = () => {
    const [query, setQuery] = useState("")

    return (
        <div className={styles.searchview}>
            <div className="searchview__search">
                <input type="text" className="searchview__searchTerm" placeholder="" />
                <button type="submit" className="searchview__searchButton">
                   Submit
                </button>
            </div>
        </div>
    );
}

export default SearchView;